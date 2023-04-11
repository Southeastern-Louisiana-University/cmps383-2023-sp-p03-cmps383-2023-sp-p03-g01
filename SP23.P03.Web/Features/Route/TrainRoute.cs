using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.Route
{
    public class TrainRoute
    {
        public int Id { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public DateTimeOffset DeperatureTime { get; set; }
        public TrainPath? Path { get; set; }
        public int? PathId { get; set; }
        public Train? Train { get; set; }

    }
}
