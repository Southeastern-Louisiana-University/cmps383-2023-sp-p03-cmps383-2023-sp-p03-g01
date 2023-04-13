using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.ScheduledRoutes;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicketDto
    {
        public int Id { get; set; }
        public TrainScheduledRoutesDto? ScheduledTrainRoute { get; set; }
        public int? SeatId { get; set; }
        public double cost { get; set; }

        public int PassagerId { get; set; }
    }
}
