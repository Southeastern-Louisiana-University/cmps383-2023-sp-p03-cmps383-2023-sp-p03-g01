using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.TrainTicket;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutes
    {
        public int Id { get; set; }
        public ICollection<TrainRoute>? Routes { get; set; } = new List<TrainRoute>();
        public ICollection<TrainRouteTicket> Tickets { get; set; } = new List<TrainRouteTicket>();
    }
}
