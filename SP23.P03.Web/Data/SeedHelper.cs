using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Route;
using SP23.P03.Web.Features.ScheduledRoutes;
using SP23.P03.Web.Features.TrainRoutes;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.TrainTicket;
using System.Globalization;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);

        await AddTrainStation(dataContext);

        await AddSeat(dataContext);
        await AddSection(dataContext);
        await AddTrain(dataContext);
        await AddTrainPath(dataContext);
        await AddTrainRoute(dataContext);
        await AddTrainScheduledRoute(dataContext);
        await AddTickets(dataContext);

    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (await trainStations.AnyAsync())
        {
            return;
        }

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hammond",
                Address = "404 N.W. Railroad Avenue",
                Hours = "9:00 AM - 4:45 PM",
                City = "Hammond",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Orlean",
                Address = "1001 Loyola Avenue",
                Hours = "5:00 AM - 10:00 PM",
                City = "New Orlean",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Slidell",
                Address = "1827 Front St",
                Hours = "9:00 AM - 10:42 AM\r\n6:00 PM - 7:52 PM",
                City = "Slidell",
                State = "LA",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Picayune",
                Address = "200 South Highway 11",
                Hours = "unknown",
                City = "Picayune",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Hattiesburg",
                Address = "308 Newman Street",
                Hours = "10:00 AM - 1:00 PM\r\n4:00 PM - 7:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Laurel",
                Address = "230 North Maple Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Meridian",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hattiesburg",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Baton Rouge",
                Address = "1900 Bacl Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Baton Rouge",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "McComb",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McComb",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Brookhaven",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Brookhaven",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Hazelhurst",
                State = "MS",
            });

        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Jackson",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Jackson",
                State = "MS",
            }); 
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Yazoo City",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Yazoo City",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Schriever",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Schriever",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "New Iberia",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "New Iberia",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lafayette",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lafayette",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Lake Charles",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Lake Charles",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Shreveport",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Shreveport",
                State = "LA",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Texarkana",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Texarkana",
                State = "AR",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Marshall",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Marshall",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Longview",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Longview",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Nacogdoches",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Nacogdoches",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Beaumont",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Beaumont",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Galveston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Galveston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Houston",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Houston",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Tyler",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mineola",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Prairie View",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Bryan",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mesquite",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Dallas",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Waco",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Worth",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Cleburne",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "McGregor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Temple",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Taylor",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Austin",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Marcos",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "San Antonio",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Killeen",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Fort Hood",
                State = "TX",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Biloxi",
                State = "MS",
            });
        dataContext.Set<TrainStation>()
            .Add(new TrainStation
            {
                Name = "Placeholder",
                Address = "1901 Front Street",
                Hours = "10:00 AM - 6:00 PM",
                City = "Mobile",
                State = "AL",
            });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainPath(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainPath>();
        var trainStations = dataContext.Set<TrainStation>();
        var trains = dataContext.Set<Train>();

        var station1 = trainStations.First();
        var station2 = new TrainStation();
        var station3 = new TrainStation();
        var station4 = new TrainStation();
        var station5 = new TrainStation();
        var station6 = new TrainStation();
        var station7 = new TrainStation();
        var station8 = new TrainStation();
        var station9 = new TrainStation();
        var station10 = new TrainStation();
        var station11 = new TrainStation();
        var station12 = new TrainStation();
        var station13 = new TrainStation();
        var station14 = new TrainStation();

        if (trainStations.Find(2) != null)
        {
            station2 = trainStations.Find(2);
        }
        if (trainStations.Find(3) != null)
        {
            station3 = trainStations.Find(3);
        }
        if (trainStations.Find(4) != null)
        {
            station4 = trainStations.Find(4);
        }
        if (trainStations.Find(5) != null)
        {
            station5 = trainStations.Find(5);
        }
        if (trainStations.Find(6) != null)
        {
            station6 = trainStations.Find(6);
        }
        if (trainStations.Find(7) != null)
        {
            station7 = trainStations.Find(7);
        }
        if (trainStations.Find(8) != null)
        {
            station8 = trainStations.Find(8);
        }
        if (trainStations.Find(9) != null)
        {
            station9 = trainStations.Find(9);
        }
        if (trainStations.Find(10) != null)
        {
            station10 = trainStations.Find(10);
        }
        if (trainStations.Find(11) != null)
        {
            station11 = trainStations.Find(11);
        }
        if (trainStations.Find(12) != null)
        {
            station12 = trainStations.Find(12);
        }
        if (trainStations.Find(13) != null)
        {
            station13 = trainStations.Find(13);
        }


        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station8,
                StartingTrainStationId = station8.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station1,
                EndingTrainStationId = station1.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station9,
                EndingTrainStationId = station9.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station9,
                StartingTrainStationId = station9.Id,
                EndingTrainStation = station10,
                EndingTrainStationId = station10.Id,
            });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station10,
               StartingTrainStationId = station10.Id,
               EndingTrainStation = station11,
               EndingTrainStationId = station11.Id,
           });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station11,
               StartingTrainStationId = station11.Id,
               EndingTrainStation = station12,
               EndingTrainStationId = station12.Id,
           });

        //reverse
        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station2,
                StartingTrainStationId = station2.Id,
                EndingTrainStation = station8,
                EndingTrainStationId = station8.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station1,
                StartingTrainStationId = station1.Id,
                EndingTrainStation = station2,
                EndingTrainStationId = station2.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station9,
                StartingTrainStationId = station9.Id,
                EndingTrainStation = station1,
                EndingTrainStationId = station1.Id,
            });

        dataContext.Set<TrainPath>()
            .Add(new TrainPath
            {
                StartingTrainStation = station10,
                StartingTrainStationId = station10.Id,
                EndingTrainStation = station9,
                EndingTrainStationId = station9.Id,
            });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station11,
               StartingTrainStationId = station11.Id,
               EndingTrainStation = station10,
               EndingTrainStationId = station10.Id,
           });
        dataContext.Set<TrainPath>()
           .Add(new TrainPath
           {
               StartingTrainStation = station12,
               StartingTrainStationId = station12.Id,
               EndingTrainStation = station11,
               EndingTrainStationId = station11.Id,
           });
        await dataContext.SaveChangesAsync();

    }
    private static async Task AddTrain(DataContext dataContext)
    {
        var trains = dataContext.Set<Train>();
        var sections = dataContext.Set<Section>();


        var train1Sections = new List<Section>();
        train1Sections.Add(sections.First());

        var train2Sections = new List<Section>();
        if(sections.Find(2)  != null) {
           train2Sections.Add(sections.Find(2));
        }

        var train3Sections = new List<Section>();
        if (sections.Find(3) != null)
        {
            train3Sections.Add(sections.Find(3));
        }

        var train4Sections = new List<Section>();
        if (sections.Find(4) != null)
        {
            train4Sections.Add(sections.Find(4));
        }

        if (await trains.AnyAsync())
        {
            return;
        }

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F150",
                Sections = train1Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F420",
                Sections = train2Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F750",
                Sections = train3Sections
            });

        dataContext.Set<Train>()
            .Add(new Train
            {
                Locomotive = "F950",
                Sections = train4Sections
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSection(DataContext dataContext)
    {
        var sections = dataContext.Set<Section>();
        var seats = dataContext.Set<Seat>();

        var ClassAseats = new List<Seat>();
        ClassAseats.Add(seats.First());

        var ClassBseats = new List<Seat>();
        if (seats.Find(2) != null)
        {
            ClassBseats.Add(seats.Find(2));
        }

        if (seats.Find(3) != null)
        {
            ClassBseats.Add(seats.Find(3));
        }

        var ClassCseats = new List<Seat>();
        if (seats.Find(4) != null)
        {
            ClassCseats.Add(seats.Find(4));
        }
        if (seats.Find(5) != null)
        {
            ClassCseats.Add(seats.Find(5));
        }

        var ClassDseats = new List<Seat>();
        if (seats.Find(6) != null)
        {
            ClassDseats.Add(seats.Find(6));
        }
        if (seats.Find(7) != null)
        {
            ClassDseats.Add(seats.Find(7));
        }
        if (seats.Find(8) != null)
        {
            ClassDseats.Add(seats.Find(8));
        }

        if (await sections.AnyAsync())
        {
            return;
        }


        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "A",
                Capacity = 168,
                Features = "Coach",
                SeatList = ClassAseats,
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "B",
                Capacity = 168,
                Features = "Coach,First Class",
                SeatList = ClassBseats,
       

            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "C",
                Capacity = 168,
                Features = "Coach,First Class,Dining",
                SeatList = ClassCseats,
            
            });

        dataContext.Set<Section>()
            .Add(new Section
            {
                Class = "D",
                Capacity = 56,
                Features = "First Class,Dining,Sleeper,Roomlet",
                SeatList = ClassDseats,
          

            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddSeat(DataContext dataContext)
    {
        var seats = dataContext.Set<Seat>();

        if (await seats.AnyAsync())
        {
            return;
        }
        //class A
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 168,
                type = "coach"
            });
        //class B
        dataContext.Set<Seat>()
             .Add(new Seat
             {
                 Quantity = 84,
                 type = "coach"
             });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "first class"
            });
        //class C
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 62,
                type = "first class"
            });
        //class D
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 42,
                type = "coach"
            });

        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 10,
                type = "sleeper"
            });
        dataContext.Set<Seat>()
            .Add(new Seat
            {
                Quantity = 4,
                type = "roomlet"
            });
        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainRoute(DataContext dataContext)
    {
        var trainRoutes = dataContext.Set<TrainRoute>();
        var trains = dataContext.Set<Train>();
        var paths = dataContext.Set<TrainPath>();

        var path2 = new TrainPath();
        var path3 = new TrainPath();
        var path4 = new TrainPath();
        var path5 = new TrainPath();
        var path6 = new TrainPath();
        var path7 = new TrainPath();
        var path8 = new TrainPath();
        var path9 = new TrainPath();
        var path10 = new TrainPath();
        var path11 = new TrainPath();
        var path12 = new TrainPath();

        if (paths.Find(2) != null)
        {
            path2 = paths.Find(2);
        }
        if (paths.Find(3) != null)
        {
            path3 = paths.Find(3);
        }
        if (paths.Find(4) != null)
        {
            path4 = paths.Find(4);
        }
        if (paths.Find(5) != null)
        {
            path5 = paths.Find(5);
        }
        if (paths.Find(6) != null)
        {
            path6 = paths.Find(6);
        }
        if (paths.Find(7) != null)
        {
            path7 = paths.Find(7);
        }
        if (paths.Find(8) != null)
        {
            path8 = paths.Find(8);
        }
        if (paths.Find(9) != null)
        {
            path9 = paths.Find(9);
        }
        if (paths.Find(10) != null)
        {
            path10 = paths.Find(10);
        }
        if (paths.Find(11) != null)
        {
            path11 = paths.Find(11);
        }
        if (paths.Find(12) != null)
        {
            path12 = paths.Find(12);
        }


        var train2 = new Train();
        var train3 = new Train();

        if (trains.Find(2) != null)
        {
            train2 = trains.Find(2);
        }
        if (paths.Find(3) != null)
        {
            train3 = trains.Find(3);
        }

        if (await trainRoutes.AnyAsync())
        {
            return;
        }

        //May 8, 8 am Baton Rouge to Jackson
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 8, 0, 0, 0, DateTimeKind.Utc),      
                DeperatureTime = new DateTime(2022, 5, 8, 10, 0, 0, 0, DateTimeKind.Utc),
                Path = paths.First(),
                PathId = paths.First().Id,
                Train = trains.First(),
                DwellTime = null,
                Layover = "30 min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 10,30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 12, 15, 0, 0, DateTimeKind.Utc),
                Path = path2,
                PathId = path2.Id,
                Train = train2,
                DwellTime = null,
                Layover = "15 min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 14, 15, 0, 0, DateTimeKind.Utc),
                Path = path3,
                PathId = path3.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 14, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 15, 30, 0, 0, DateTimeKind.Utc),
                Path = path4,
                PathId = path4.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 15, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 20, 0, 0, DateTimeKind.Utc),
                Path = path5,
                PathId = path5.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 16, 35, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 50, 0, 0, DateTimeKind.Utc),
                Path = path6,
                PathId = path6.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        //May 8, 10 am Baton Rouge to Jackson
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 10, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 12, 00, 0, 0, DateTimeKind.Utc),
                Path = paths.First(),
                PathId = paths.First().Id,
                Train = trains.First(),
                DwellTime = null,
                Layover = "30min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 14, 30, 0, 0, DateTimeKind.Utc),
                Path = path2,
                PathId = path2.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 14, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 16, 00, 0, 0, DateTimeKind.Utc),
                Path = path3,
                PathId = path3.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30 min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 16, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 17, 30, 0, 0, DateTimeKind.Utc),
                Path = path4,
                PathId = path4.Id,
                Train = train3,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 17, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 18, 45, 0, 0, DateTimeKind.Utc),
                Path = path5,
                PathId = path5.Id,
                Train = train3,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 8, 19, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 8, 20, 00, 0, 0, DateTimeKind.Utc),
                Path = path6,
                PathId = path6.Id,
                Train = train3,
                DwellTime = "15 null",
                Layover = null,
            });
        //May 14, 8 am Jackson to Baton Rouge \
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 8, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 9, 00, 0, 0, DateTimeKind.Utc),
                Path = path7,
                PathId = path7.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 9, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 10, 15, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 10, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 11, 45, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 12, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 13, 00, 0, 0, DateTimeKind.Utc),
                Path = path9,
                PathId = path9.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 13, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 14, 15, 0, 0, DateTimeKind.Utc),
                Path = path10,
                PathId = path10.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 14, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 16, 15, 0, 0, DateTimeKind.Utc),
                Path = path11,
                PathId = path11.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30 min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 16, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 18, 45, 0, 0, DateTimeKind.Utc),
                Path = path12,
                PathId = path12.Id,
                Train = trains.First(),
                DwellTime = null,
                Layover = null,
            });
        //May 14, 10 am Jackson to Baton Rouge \
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 10, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 11, 00, 0, 0, DateTimeKind.Utc),
                Path = path7,
                PathId = path7.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 11, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 12, 15, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 12, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 13, 45, 0, 0, DateTimeKind.Utc),
                Path = path8,
                PathId = path8.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 14, 00, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 15, 00, 0, 0, DateTimeKind.Utc),
                Path = path9,
                PathId = path9.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 15, 15, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 16, 15, 0, 0, DateTimeKind.Utc),
                Path = path10,
                PathId = path10.Id,
                Train = train2,
                DwellTime = "15 min",
                Layover = null,
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 16, 30, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 18, 15, 0, 0, DateTimeKind.Utc),
                Path = path11,
                PathId = path11.Id,
                Train = train2,
                DwellTime = null,
                Layover = "30 min",
            });
        dataContext.Set<TrainRoute>()
            .Add(new TrainRoute
            {
                ArrivalTime = new DateTime(2022, 5, 14, 18, 45, 0, 0, DateTimeKind.Utc),
                DeperatureTime = new DateTime(2022, 5, 14, 20, 45, 0, 0, DateTimeKind.Utc),
                Path = path12,
                PathId = path12.Id,
                Train = trains.First(),
                DwellTime = null,
                Layover = null,
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrainScheduledRoute(DataContext dataContext)
    {
        var trainScheduledRoutes = dataContext.Set<TrainScheduledRoutes>();
        var trainRoutes = dataContext.Set<TrainRoute>();

        if (await trainScheduledRoutes.AnyAsync())
        {
            return;
        }
        var groupofRoutes = new List<TrainRoute>();
        groupofRoutes.Add(trainRoutes.First());

        dataContext.Set<TrainScheduledRoutes>()
            .Add(new TrainScheduledRoutes
            {
                Routes = groupofRoutes,
            });

        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTickets(DataContext dataContext)
    {
        var tickets = dataContext.Set<TrainRouteTicket>();
        var trainRoutes = dataContext.Set<TrainRoute>();
        var seats = dataContext.Set<Seat>();
        var users = dataContext.Set<User>();

        if (await tickets.AnyAsync())
        {
            return;
        }

        dataContext.Set<TrainRouteTicket>()
            .Add(new TrainRouteTicket
            {
                cost = 12.50,
                Passager = users.First(),
                PassagerId = users.First().Id,
                TrainRoute = trainRoutes.First(),
                SeatType = seats.First().type,
            });


        await dataContext.SaveChangesAsync();
    }
}