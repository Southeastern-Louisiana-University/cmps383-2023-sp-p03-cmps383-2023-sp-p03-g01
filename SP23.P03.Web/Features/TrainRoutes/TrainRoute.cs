using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainRoute
    {
        public int Id { get; set; }
        public DateTimeOffset ArrivalTime { get; set; }
        public DateTimeOffset DeperatureTime { get; set; }
        public int StartingTrainStationId { get; set; }
        public TrainStation StartingTrainStation { get; set; } = new TrainStation();

        public int EndingTrainStationId { get; set; }
        public TrainStation EndingTrainStation { get; set; } = new TrainStation();
    }
}
