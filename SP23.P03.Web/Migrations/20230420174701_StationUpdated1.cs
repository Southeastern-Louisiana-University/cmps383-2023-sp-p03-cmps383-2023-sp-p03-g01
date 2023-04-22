using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class StationUpdated1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TrainRouteTicket_Seat_SeatId",
                table: "TrainRouteTicket");

            migrationBuilder.DropIndex(
                name: "IX_TrainRouteTicket_SeatId",
                table: "TrainRouteTicket");

            migrationBuilder.DropColumn(
                name: "SeatId",
                table: "TrainRouteTicket");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "TrainStation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "TrainStation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "TrainRouteTicket",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SeatType",
                table: "TrainRouteTicket",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "TrainStation");

            migrationBuilder.DropColumn(
                name: "State",
                table: "TrainStation");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "TrainRouteTicket");

            migrationBuilder.DropColumn(
                name: "SeatType",
                table: "TrainRouteTicket");

            migrationBuilder.AddColumn<int>(
                name: "SeatId",
                table: "TrainRouteTicket",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_TrainRouteTicket_SeatId",
                table: "TrainRouteTicket",
                column: "SeatId");

            migrationBuilder.AddForeignKey(
                name: "FK_TrainRouteTicket_Seat_SeatId",
                table: "TrainRouteTicket",
                column: "SeatId",
                principalTable: "Seat",
                principalColumn: "Id");
        }
    }
}
