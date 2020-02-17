# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create( name: "Richard", email: "runthisshit@gmail.com", password:"1234")

Spot.create( name: "Brooklyn Banks", address: "355 Pearl St, New York, NY 10038", boro: "manhattan", trains: "Chambers St J/M/Z and 4/5/6", obstacles: "Steep bank, stair sets, rails, DIY boxes, etc.", rating: 5, description: "Probably the most famous spot in NYC, featured in tons of video games and movies. Has gone through many life cycles from open skatepark to city construction storage. Open for the time being, can you really call yourself an skateboarder in NY without having done at least a trick here? Debatable.", directions: "Get off at chambers st station head to the police station, go under the bridge, might have to sneak your way in, sometimes open sometimes not", bust_factor: "You will not be bothered here.", noteworthy: "Ian Michna - No Comply", photo_main: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F13%2Ffiles%2F2017%2F04%2F11611_brooklyn-banks-2017_coverImage.jpg?w=960&cbr=1&q=90&fit=max", photo2: "https://format-com-cld-res.cloudinary.com/image/private/s--PL9rd0ad--/c_limit,g_center,h_1200,w_65535/fl_keep_iptc.progressive,q_95/v1/b21ff36256b5a820f0839292ad1cc8d8/Danny_Salgado_no_comply_tailslide-brooklyn_banks.jpg", photo3: "https://dslv9ilpbe7p1.cloudfront.net/EQaYtV2a2OYStr_GhNi0KA_store_header_image", phto4: "https://blogs.baruch.cuny.edu/eng2100essesfall/files/2015/12/ot1k21cpkdvbaqfltktl.jpg", user_id: 1)

Spot.create(name: "Black Marble Hubba", address: "65-55 Centre St, New York, NY 10007", boro: "manhattan", trains: "4/5/6 and J/Z at City Hall/Brooklyn Bridge", obstacles: "Slick black marble ledges down stair sets.", rating: 4, description: "If you haven't skated here you most assuredly know it from videos. Decently high and slick. You probably have some sort of flow/hook up if you are skating here but if you can skate it definitely worth it. Some of the ledges can be hit from flat, but just kissing the ledge.", bust_factor: "Its possible but probably won't be hassled.", noteworthy: "Alot has been done here", directions: "Get off the subway, skate down hill, you will see it", photo_main: "https://storage.googleapis.com/fsscs1/images/large/41a9e56ede865686c6517d76d94b97f7.jpg", photo2: "https://i.ytimg.com/vi/DHzxAS_2oo0/maxresdefault.jpg", photo3: "https://quartersnacks.com/wp-content/uploads/2010/05/blackhubba1.jpg", user_id: 1)

 Spot.create(name: "C-Benches", address: "88 Pine St, New York, NY 10005", boro: "manhattan", trains: "2/3 Wall St and J/Z Broad St", obstacles: "Perfect flatground, marble benches shaped like pixelated Cs", rating: 4, description: "The ledges are nice and slick. Fun to grind and if you can weave your manny skills should be a good time", bust_factor: "If you go during the week you will get kicked out, on the weekend it varies but usually you can get like 20mins to an hour.", noteworthy: "Watch NYC edits.", photo_main: "https://storage.googleapis.com/fsscs1/images/medium/cda2e75e77b959344bc9247076b513d2.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2010/05/c-benches-across-2.jpg", user_id: 1)

Spot.create( name: "Blue Park", address:"166 Manhattan Ave, Brooklyn, NY 11206", boro: "brooklyn", trains: "Montrose L, Broadway G, Lorimer J/M", obstacles: "Ever shifting array of DIY and always concrete manny pads with metal edges. Everything is titled.", rating: 5, description: "Has become a hot spot in the past couple years but still one of the chillest parks to skate at. New obstacles come and go but the basics are always there. If you go during the day pre-1/2pm you might run into school recess which can seriously put a bummer on the sesh.", bust_factor: "Not by any means, its a skatepark.", noteworthy: "erryday", photo_main: "https://quartersnacks.com/wp-content/uploads/2016/03/bluepark3.jpg", photo2: "https://lh3.googleusercontent.com/proxy/n7ieyrFJMKqWhaa1sAYDlBygcH5oBlmoIxXVlC6oHxUBF_2RibojwjeB36kkJzc9Pm6wOm_Fnn14XL5KgiBI5syt0UO35NJqFPjFayWmheZbUhX3R4n1FcOCsY8i", photo3: "https://i.ytimg.com/vi/_-jtNDXlqp0/hqdefault.jpg", user_id: 1)

Spot.create( name: "Fort Greene Park", address:"112 Dekalb Ave, Brooklyn, NY 1120", boro: "brooklyn", trains: "G or A/C", obstacles: "Decent ground and ledges. If you are fancy you can ollie up to manual/grind combos. But you probably aren't that fancy", rating: 5, description: "You generally will not get kicked out here too often. They used to be harsher about it but last couple times I was there there was no issue whatsover. Just be weary of your board flying out and impaling a child or something.", noteworthy: "", photo_main: "https://quartersnacks.com/wp-content/uploads/2019/06/ishodfsblunt.jpg", photo2: "https://lh3.googleusercontent.com/proxy/nUOcrZ8Uutxm1AM2MJyAvEBjZksprzB2GqbEDTum6_1oDsUrLu0J7X5xB5c2HvTeCF909hxiyd6RlBhxMSjv-dSiHrS7GcLNhWI7LwrjuHS07sGdDyxTeaUuhtpH3TkSbftHN9WW5VAN2Dj9PHZttNpK39LUSBbpE7IiRnPrphS9Eg", photo3: "https://storage.googleapis.com/fsscs1/images/large/3dec3a161fe7516cf6670209b46b672c.jpg", phto4: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150077.jpg", user_id: 1)

Spot.create( name: "Carrol Manny Pads", address:"317 Hoyt St, Brooklyn, NY 11231", boro: "brooklyn", trains: "Carroll St G/F", obstacles: "The manny pad that dreams are made of", rating: 5, description: "Relativey easy going on the weekend. The top if perfect for manuals but also waxed for grinds. I wouldnt not recommmend going on a school day, since ya know, its a school and you will probably get hassled", noteworthy: "", photo_main: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150084.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150083.jpg", photo3: "", phto4: "", user_id: 1)

Spot.create( name: "Maria Hernandez Park", address:"276 Knickerbocker Ave, Brooklyn, NY 11237", boro: "brooklyn", trains: "Jefferson L-train", obstacles: "A foot high-ish metal edge ledge, somewhat curved. Can be used for manuals and a bar to ollie over", rating: 5, description: ".", noteworthy: "", photo_main: "https://quartersnacks.com/wp-content/uploads/2010/05/P1010001.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2010/05/P1010002.jpg", photo3: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/107155f5-7d00-4b17-b5be-a602daaf2d5c/d2uu4v3-36483b59-e78a-45df-9227-9d12cf9d1b58.jpg/v1/fill/w_900,h_600,q_75,strp/ollie_at_maria_hernandez_park_by_wastedpixels_d2uu4v3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvMTA3MTU1ZjUtN2QwMC00YjE3LWI1YmUtYTYwMmRhYWYyZDVjXC9kMnV1NHYzLTM2NDgzYjU5LWU3OGEtNDVkZi05MjI3LTlkMTJjZjlkMWI1OC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qhTz6IjZ76OJufMDVndXK228HpRbtO6eflw5RaIdFfk", phto4: "https://c1.staticflickr.com/5/4507/37968066232_6f7a777e77_b.jpg", user_id: 1)

Spot.create( name: "Monument", address:"", boro: "brooklyn", trains: "Marcy J/M/Z or Bedford L", obstacles: "Tiny curbs, grindable benches, stairs, handrails for the big boys", rating: 5, description: "An iconic Brooklyn spot. Seen in countless videos. This spot is nice because it has different things to skate for different skill levels, you can fuck around on low stuff for fun or you can take it up a a knotch and go for the gap to rail, etc", noteworthy: "", photo_main: "https://pbs.twimg.com/media/DxnyWL_UYAEBD7F.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2010/05/williamsburg5.jpg", photo3: "https://quartersnacks.com/wp-content/uploads/2010/05/williamsburg8.jpg", phto4: "https://quartersnacks.com/wp-content/uploads/2010/05/williamsburg6.jpg", photo5: "https://quartersnacks.com/wp-content/uploads/2010/05/williamsburg7.jpg", user_id: 1)

Spot.create( name: "Borough Hall", address:"16 Court St, Brooklyn, NY 11241", boro: "brooklyn", trains: "5/6 Borough Hall. Others, I am sure you can figure it out", obstacles: "Perfect flat ground, some grindable stairs and small manny pad", rating: 5, description: "This has become a popular space for skaters to congregate recently. To be honest its not much of a spot but its perfect for the ole hangover skate sesh. Perfect ground and easy obstacles, never heard of anyone getting kicked out of here but I am sure it happens from time to time", noteworthy: "", photo_main: "https://i0.wp.com/skateboarding.transworld.net/wp-content/uploads/2019/05/tfunk.jpg?resize=1584%2C836&ssl=1", photo2: "https://quartersnacks.com/wp-content/uploads/2018/01/boroughhall1.jpg", photo3: "https://lh3.googleusercontent.com/proxy/Oww3UrmffNQOXMbtTODNuBlrX201GvpoBw6OiA1vcaVS2y38Dw4ioUPbTatINMv5JsOBUQ60MD46nhddZLekD0W83QGVrqION8liWFulO1ZvJQkC_8VVki-iN9cLM9Qd", phto4: "https://cms.prod.nypr.digital/images/295549/fill-634x707/", user_id: 1)

Spot.create( name: "Farragut Ledges", address:"228 York St, Brooklyn, NY 11201", boro: "brooklyn", trains: "York St F-train", obstacles: "Cool little ledges you can ride up onto. Not the easiest to skate", rating: 5, description: "This spot is great but its a bit difficult to skate. Also its in the projects and alot of the residents will give you shit about the noise, etc. Be prepared for at least a couple 'There is a skatepark across the street.....' type comments.", noteworthy: "", photo_main: "https://quartersnacks.com/wp-content/uploads/2016/03/faragut2.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2016/03/faragut1.jpg", photo3: "https://quartersnacks.com/wp-content/uploads/2016/03/faragut3.jpg", phto4: "", user_id: 1)

Spot.create( name: "Flushing Meadows Park", address:"Unisphere
Flushing Meadows-Corona Park, Corona, NY 11368", boro: "queens", trains: "Mets - Willets Point 7-train", obstacles: "The fountain gap, stairs, ledges and now the maloof park", rating: 5, description: "Aside from the Brooklyn Banks this is probably the most iconic NY skate spot there is. The park has a ton of stuff to skate although it is pretty crusty at this point. The fountain has ledges and the infamous grate gap. Also now they have the maloof money cup park that is actually a ton of fun to skate", noteworthy: "", photo_main: "https://static01.nyt.com/images/2011/08/26/arts/26JPFLUSHING5/26JPFLUSHING5-articleLarge.jpg?quality=75&auto=webp&disable=upscale", photo2: "https://galaxypro.s3.amazonaws.com/spot-media/437/437-flushing-meadows-skate.jpg", photo3: "https://cdn.shopify.com/s/files/1/0342/5665/files/paul_berrics_923ab711-e432-4c14-8618-1c607571256e.jpg?1105", phto4: "https://pbs.twimg.com/media/D_TiuIlWsAAC9Xc.jpg", user_id: 1)

Spot.create( name: "Con-Edison Banks", address:"20-02 31st St, Astoria, NY 11105", boro: "queens", trains: "Ditmas Blvd N/W-trains", obstacles: "Big leagues shit", rating: 5, description: "Well known but infamously hard place to skate. You won't get kicked out but you have to be a good skateboarde to get anything here. Also it is ROUGH ground.", noteworthy: "", photo_main: "https://i.pinimg.com/originals/8e/b5/ca/8eb5ca3df78fbfd28c95de1675a37204.jpg", photo2: "https://66.media.tumblr.com/0a03451660c95367c7ab00d693b8d99b/tumblr_nsmygb8TPP1ut9y33o4_1280.jpg", photo3: "https://66.media.tumblr.com/b85bf8c630caa2cf7841170b7bf77a7e/tumblr_nsmygb8TPP1ut9y33o3_1280.jpg", phto4: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150014.jpg", user_id: 1)

Spot.create( name: "Vernon Jackson", address:"47-29 Vernon Blvd, Long Island City, NY 11101", boro: "queens", trains: "Vernon Blvd 7-train", obstacles: "Pink ledges in a basketball court and a frontside for regular metal ledge over a small gap", rating: 5, description: "Great spot with lots of fun stuff to skate. Mainly ledges that are a decent height. You won't get kicked out here but many times the park is being used to other activities and you will be the asshole", noteworthy: "", photo_main: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150091.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2010/05/vernonjackson.jpg", photo3: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150089.jpg", phto4: "https://quartersnacks.com/wp-content/uploads/2010/05/P4150092.jpg", user_id: 1)

Spot.create( name: "Bronx Courthouse", address:"", boro: "bronx", trains: "161st St-Yankee 6-train", obstacles: "stairs and drops", rating: 5, description: "This one is hard to skate. Recommened you only go here if you are there to film something. You can go during the weekend when the courhouse is closed but not during the week as you will get kicked out", noteworthy: "", photo_main: "https://storage.googleapis.com/fsscs1/images/large/47d3420525cc4c49067c8692088bd2db.jpg", photo2: "https://quartersnacks.com/wp-content/uploads/2011/07/P6110033.jpg", photo3: "https://quartersnacks.com/wp-content/uploads/2011/07/P6110014.jpg", phto4: "https://quartersnacks.com/wp-content/uploads/2011/07/P6110024.jpg", photo5: "https://quartersnacks.com/wp-content/uploads/2011/07/P6110029.jpg", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)

Spot.create( name: "", address:"", boro: "brooklyn", trains: "", obstacles: "", rating: 5, description: ".", noteworthy: "", photo_main: "", photo2: "", photo3: "", phto4: "", photo5: "", user_id: 1)









