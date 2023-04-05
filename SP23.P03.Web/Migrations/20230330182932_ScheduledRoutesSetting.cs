using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class ScheduledRoutesSetting : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TrainScheduledRoutesId",
                table: "TrainRoute",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "TrainScheduledRoutes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainScheduledRoutes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_TrainRoute_TrainScheduledRoutesId",
                table: "TrainRoute",
                column: "TrainScheduledRoutesId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRoute_TrainScheduledRoutes_TrainScheduledRoutesId",
                table: "TrainRoute",
                column: "TrainScheduledRoutesId",
                principalTable: "TrainScheduledRoutes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRoute_TrainScheduledRoutes_TrainScheduledRoutesId",
                table: "TrainRoute");

            migrationBuilder.DropTable(
                name: "TrainScheduledRoutes");

            migrationBuilder.DropIndex(
                name: "IX_TrainRoute_TrainScheduledRoutesId",
                table: "TrainRoute");

            migrationBuilder.DropColumn(
                name: "TrainScheduledRoutesId",
                table: "TrainRoute");
        }
    }
}
