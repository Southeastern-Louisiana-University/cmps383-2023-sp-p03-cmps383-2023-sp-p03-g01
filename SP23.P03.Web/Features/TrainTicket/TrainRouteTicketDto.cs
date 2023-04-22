using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketDto
    {
        public int Id { get; set; }
        public TrainRouteDto? TrainRoute { get; set; }
        public string? Code { get; set; }
        public string? SeatType { get; set; }
        public double cost { get; set; }
        public int? PassagerId { get; set; }
    }
}
