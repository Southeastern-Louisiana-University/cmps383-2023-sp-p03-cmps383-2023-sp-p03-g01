using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Trains
{
    public class TrainDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Locomotive { get; set; } = string.Empty;
        public int? TrainRouteId { get; set; }
        public IEnumerable<SectionDto>? Sections { get; set; }
    }
}
