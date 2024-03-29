﻿using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainPath
    {
        public int Id { get; set; }
        public int? StartingTrainStationId { get; set; }
        public TrainStation? StartingTrainStation { get; set; } 

        public int? EndingTrainStationId { get; set; }
        public TrainStation? EndingTrainStation { get; set; } 

    }
}
