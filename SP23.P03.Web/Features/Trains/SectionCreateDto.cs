using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.Trains
{
    public class SectionCreateDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Class { get; set; } = string.Empty;
        [Required]
        public int Capacity { get; set; }
        [Required]
        public string Features { get; set; } = string.Empty;
    }
}
