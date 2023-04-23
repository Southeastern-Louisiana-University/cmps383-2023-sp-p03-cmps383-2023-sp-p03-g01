using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainPathDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int? StartingTrainStationId { get; set; }
        [Required]
        public int? EndingTrainStationId { get; set; }
    }
}
