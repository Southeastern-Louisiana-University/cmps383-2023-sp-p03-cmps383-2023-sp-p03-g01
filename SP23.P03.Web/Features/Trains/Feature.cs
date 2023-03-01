namespace SP23.P03.Web.Features.Trains
{
    public class Feature
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;    

        public Train? Train { get; set; }
        public int? TrainId { get; set; }
    }
}
