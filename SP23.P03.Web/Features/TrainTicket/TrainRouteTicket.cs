using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.TrainTicket
{
    public class TrainRouteTicket
    {
        public int Id { get; set; }
        public TrainScheduledRoutes? ScheduledTrainRoute { get; set; }
        public string? Code { get; set; }
        public string? SeatType { get; set; }
        public double cost { get; set; }
        public virtual User? Passager { get; set; } 

        public int? PassagerId { get; set; }
    }
}
