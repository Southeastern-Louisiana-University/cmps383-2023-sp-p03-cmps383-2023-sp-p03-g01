using System.ComponentModel.DataAnnotations;

namespace SP23.P03.Web.Features.TrainStations;

public class TrainStationDto
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; } = string.Empty;
    [Required]
    public string Address { get; set; } = string.Empty;
    [Required]
    public int? ManagerId { get; set; }
    [Required]
    public string Hours { get; set; } = string.Empty;
    [Required]
    public string City { get; set; } = string.Empty;
    [Required]
    public string State { get; set; } = string.Empty;
}