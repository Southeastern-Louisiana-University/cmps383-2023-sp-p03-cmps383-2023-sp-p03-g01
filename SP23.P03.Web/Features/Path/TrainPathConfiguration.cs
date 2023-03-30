using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.TrainStations;
using System.Reflection.Emit;
using System.Reflection.Metadata;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Features.TrainRoutes
{
    public class TrainPathConfiguration : IEntityTypeConfiguration<TrainPath>
    {
        public void Configure(EntityTypeBuilder<TrainPath> builder)
        {
            builder.HasOne(x => x.EndingTrainStation)
                .WithMany()
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.StartingTrainStation)
                .WithOne()
            .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
