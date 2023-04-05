using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TicketSettup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TicketId",
                table: "AspNetUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "TrainRouteTicket",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ScheduledTrainRouteId = table.Column<int>(type: "int", nullable: true),
                    SeatId = table.Column<int>(type: "int", nullable: true),
                    cost = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrainRouteTicket", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TrainRouteTicket_Seat_SeatId",
                        column: x => x.SeatId,
                        principalTable: "Seat",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TrainRouteTicket_TrainScheduledRoutes_ScheduledTrainRouteId",
                        column: x => x.ScheduledTrainRouteId,
                        principalTable: "TrainScheduledRoutes",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TicketId",
                table: "AspNetUsers",
                column: "TicketId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRouteTicket_ScheduledTrainRouteId",
                table: "TrainRouteTicket",
                column: "ScheduledTrainRouteId");

            migrationBuilder.CreateIndex(
                name: "IX_TrainRouteTicket_SeatId",
                table: "TrainRouteTicket",
                column: "SeatId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_TrainRouteTicket_TicketId",
                table: "AspNetUsers",
                column: "TicketId",
                principalTable: "TrainRouteTicket",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_TrainRouteTicket_TicketId",
                table: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "TrainRouteTicket");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_TicketId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "TicketId",
                table: "AspNetUsers");
        }
    }
}
