using SP23.P03.Web.Features.Route;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainScheduledRouteTicketDto
    {
        public int Id { get; set; }
        public int? RouteId { get; set; }
        public string? Code { get; set; }
        public string? SeatType { get; set; }
        public double cost { get; set; }
    }
}
