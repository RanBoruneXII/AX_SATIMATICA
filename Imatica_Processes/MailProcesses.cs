using FLEXYGO.Mails;
using FLEXYGO.Objects;
using FLEXYGO.Processing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FLEXYGO.UI;
using FLEXYGO.Security;
using FLEXYGO.Data;
using System.Data.Common;
using System.Data;
using static FLEXYGO.UI.DocumentManager;
using System.Diagnostics;

namespace Imatica_Processes
{
    public class FileInfo
    {
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
    }

    public class StatusTicket
    {
        public string MessageId { get; internal set; }
        public int Status { get; internal set; }
        public string ErrorMsg { get; internal set; }
        public string ObjectName { get; internal set; }
        public string ObjectWhere { get; internal set; }
    }

    public class MailProcesses
    {

        public static bool UpdateStatusMailsOutbox(EntityObject Entity, ref ProcessManager.ProcessHelper Ret)
        {
            bool flag = true;
            string pos = "";
            try
            {
                List<string> TicketsSinStatus = ObtenerTicketsEnviadosSinStatus();
                List<StatusTicket> NewStatusTicketsSinStatus = ObtenerMailsSalientes(TicketsSinStatus);
                string TicketsIdForUpdate = String.Join(",",NewStatusTicketsSinStatus.Where(p => p.Status == 2).Select(p => p.ObjectWhere.Replace("IdDoc =", "") ));
                // Actualizamos el status
               
                        if (!String.IsNullOrWhiteSpace(TicketsIdForUpdate)) UpdateTicketStatus(TicketsIdForUpdate);
               



                if (!String.IsNullOrWhiteSpace(pos)) throw new Exception("Se han producido errores procesando los mensajes");
                Ret.Success = true;
                Ret.SuccessMessage = "Archivos de mails sincronizados";
                flag = true;
            }
            catch (Exception ex)
            {
                // Get stack trace for the exception with source file information
                var st = new StackTrace(ex, true);
                // Get the top stack frame
                var frame = st.GetFrame(0);
                // Get the line number from the stack frame
                var line = frame.GetFileLineNumber();


                Ret.Success = false;
                Ret.LastException = ex;
                Ret.WarningMessage = $"Line {line} - {ex.Message}:  ";
                flag = true;
            }

            return flag;
        }

        private static void UpdateTicketStatus(string ticketsId)
        {
            string query = $"update Pers_Pcl_Ticket_Detalle set EnviadoMail=1 where Id in ({ticketsId})";
            DataManager dataManager1 = new DataManager("DataConnectionString");
            int result = dataManager1.ExecuteSql(query);
        }

        public static bool SyncFilesV2(EntityObject Entity, ref ProcessManager.ProcessHelper Ret)
        {


            bool flag = true;
            string pos = "";
            try
            {
                DataTable dataTable = ObtenerMailsConAdjuntosPendientesDeExtraer();
                foreach (DataRow row in dataTable.Rows)
                {
                    try
                    {
                        string Objectname = "Pcl_Ticket";
                        string FolderId = "inbox";
                        string ObjectId = Convert.ToString(row["IdTicket"]);
                        string ObjectDetalleId = Convert.ToString(row["IdTicketDetalle"]);
                        string MessageIds = Convert.ToString(row["MessageId"]);
                        EntityObject myentity = new EntityObject("Pcl_Ticket", $"idTicket={ObjectId}", Ret.ConfToken);
                        if (!Processes.LinkEmails(myentity, ref Ret, MessageIds, Objectname, ObjectId, FolderId))
                        {

                            UpdateEmailAttachmentsExtractWithError(MessageIds);
                            throw new Exception($"Se ha producido un error linkando email con objeto {Ret.LastException.Message} ObjectId:({ObjectId}) ObjectDetalleId:({ObjectDetalleId}) MessageId:({MessageIds})", Ret.LastException);
                        }

                        // Obtenemos los adjuntos del mail, por eso lo linkamos
                        List<FileInfo> Attachments = ObtenerAttachmentsMail(MessageIds);

                        foreach (var Attachment in Attachments)
                        {
                            byte[] imageArray = System.IO.File.ReadAllBytes(Attachment.FilePath.Replace("/", "\\"));
                            string base64ImageRepresentation = Convert.ToBase64String(imageArray);
                            DocumentResult result = DocumentManager.SetDocument(Objectname, ObjectId, Attachment.FileName, "diskfile", base64ImageRepresentation, null, null, null, "upload", false, false, Ret.ConfToken, "");
                        }
                        UpdateEmailAttachmentsExtract(MessageIds);

                    }
                    catch (Exception ex)
                    {
                        pos = pos + $"{ex.Message}/n";
                    }
                }

                if (!String.IsNullOrWhiteSpace(pos)) throw new Exception("Se han producido errores procesando los mensajes");
                Ret.Success = true;
                Ret.SuccessMessage = "Archivos de mails sincronizados";
                flag = true;
            }
            catch (Exception ex)
            {
                // Get stack trace for the exception with source file information
                var st = new StackTrace(ex, true);
                // Get the top stack frame
                var frame = st.GetFrame(0);
                // Get the line number from the stack frame
                var line = frame.GetFileLineNumber();


                Ret.Success = false;
                Ret.LastException = ex;
                Ret.WarningMessage = $"Line {line} - {ex.Message}:  ";
                flag = true;
            }

            return flag;
        }

        private static DataTable ObtenerMailsConAdjuntosPendientesDeExtraer()
        {
            string query = "select * from Pers_Pcl_Ticket_Mails where ArchivosDescargados = 0 and((IdTicket > 0) or(isnull(IdTicket, -1) > 0))  and HasAttachments = 1 order by MailDate desc";
            DataManager dataManager1 = new DataManager("DataConnectionString");
            DataTable dataTable = dataManager1.DataTable(query);
            return dataTable;
        }

        private static List<string> ObtenerTicketsEnviadosSinStatus()
        {
            string query = "select  Id  from Pers_Pcl_Ticket_Detalle where Entrante=0 and EnviadoMail=0";
            DataManager dataManager1 = new DataManager("DataConnectionString");
            DataTable dataTable = dataManager1.DataTable(query);
            List<string> result = new List<string>();
            foreach (DataRow row in dataTable.Rows)
            {
                try
                {

                    
                    result.Add(row["Id"].ToString());
                }
                catch (Exception ex)
                {
                }
            }
            return result;
        }


        private static List<StatusTicket> ObtenerMailsSalientes(List<string> lista)
        {
            string query = $"select Status,ErrorMsg,ObjectName,ObjectWhere from Mails_Outbox where ObjectName='Pcl_Ticket_Detalle' and Replace(ObjectWhere,'idDoc = ','') in ({String.Join(",", lista)})";
            DataManager dataManager1 = new DataManager("ConfConnectionString");
            DataTable dataTable = dataManager1.DataTable(query);
            List<StatusTicket> result = new List<StatusTicket>();
            foreach (DataRow row in dataTable.Rows)
            {
                try
                {


                    var resultline = new StatusTicket
                                          {Status = Convert.ToInt32(row["Status"]), 
                                           ErrorMsg = row["ErrorMsg"].ToString(),
                                           ObjectName = row["ObjectName"].ToString(),
                                           ObjectWhere = row["ObjectWhere"].ToString()
                    };
                    result.Add(resultline);

                }
                catch (Exception ex)
                {
                }
            }
            return result;
            
        }


        private static List<FileInfo> ObtenerAttachmentsMail(string MessageIds)
        {
            string queryAttachments = $"select * from Mails_Attachments where MessageId='{MessageIds}'";
            DataManager DataConnection = new DataManager("ConfConnectionString");
            DataTable dataAttachments = DataConnection.DataTable(queryAttachments);
            List<FileInfo> Attachments = new List<FileInfo>();
            foreach (DataRow row2 in dataAttachments.Rows)
            {
                FileInfo element = new FileInfo();
                element.FilePath = Convert.ToString(row2["FilePath"]);
                element.FileName = Convert.ToString(row2["FileName"]);
                element.FileType = Convert.ToString(row2["ContentType"]);
                Attachments.Add(element);
            }

            return Attachments;
        }

        public static bool SyncInbox2(EntityObject Entity, ref ProcessManager.ProcessHelper Ret)
        {
            bool flag;
            try
            {

                DataManager Dm = new DataManager("ConfConnectionString");
                DbDataReader dread = Dm.DataReader("select MailAccountId from Mail_Accounts");
                object[] values = new object[dread.FieldCount];

                while (dread.Read())
                {
                    dread.GetValues(values);
                    EmailAccount account = new EmailAccount(values[0].ToString());
                    List<Mails> downloaded_emails = FLEXYGO.Mails.Reception.DownloadMails(account, "Inbox", 9999, Ret.ConfToken);
                }
                Ret.Success = true;
                Ret.SuccessMessage = "Mails sincronizados";
                flag = true;
            }
            catch (Exception ex)
            {
                Exception exception = ex;
                Ret.Success = false;
                Ret.LastException = exception;
                flag = false;
            }
            return flag;
        }

        private static void UpdateEmailAttachmentsExtract(string MessageIds)
        {
            DataManager dataManager2 = new DataManager("DataConnectionString");
            string SqlSentence = $"update Pers_Pcl_Ticket_Mails set ArchivosDescargados = 1 where   MessageId ='{MessageIds}'";
            dataManager2.ExecuteSql(SqlSentence);
            dataManager2.Close();
        }
        private static void UpdateEmailAttachmentsExtractWithError(string MessageIds)
        {
            DataManager dataManager2 = new DataManager("DataConnectionString");
            string SqlSentence = $"update Pers_Pcl_Ticket_Mails set ArchivosDescargados = -1 where   MessageId ='{MessageIds}'";
            dataManager2.ExecuteSql(SqlSentence);
            dataManager2.Close();
        }
    }


}
