using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.ScheduledRoutes;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketCreateDto
    {
        public int? TrainRouteId { get; set; }
        public int? SeatId { get; set; }
        public double cost { get; set; }
    }
}
