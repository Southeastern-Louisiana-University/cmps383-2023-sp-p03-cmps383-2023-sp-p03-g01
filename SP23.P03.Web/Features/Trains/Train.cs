using SP23.P03.Web.Features.TrainRoutes;

namespace SP23.P03.Web.Features.Trains
{
    public class Train
    {
        public int Id { get; set; }
        public string Model { get; set; } = string.Empty;
        public int Capacity { get; set; }

        public int TrainRouteId { get; set; }
        public TrainRoute TrainRoute { get; set; } = new TrainRoute();
    }
}
