using SP23.P03.Web.Features.Route;

namespace SP23.P03.Web.Features.ScheduledRoutes
{
    public class TrainScheduledRoutes
    {
        public int Id { get; set; }
        public ICollection<TrainRoute>? Routes { get; set; } = new List<TrainRoute>();
    }
}
