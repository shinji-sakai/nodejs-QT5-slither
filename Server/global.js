//This is the global storage (signleton)

// Port where we'll run the server
var serverPort = 1337;

var rooms = [];
var userlist = {
};
var roomNo = 0;
var botNo = 0;
var startingPoint = new Date();
var palette = ["FF0000", "FF9727", "FFFF1A", "5EFF22", "00FFB4", "F7A1FF", "FF74CB", "FF0C0C", "000000", "FFFFFF"];
var names = "Bumba`nick26`jjjjj`Rigor`meow`cookie`HAHA`Meep`paige`tico`Donald`Wander`dmcjjebdgdhwhrjjeei`Wormy`hit a home run today `I don\'t wanna kill`ajlaaaaaaaa`Loser`bg master xNx`Miguel`MAZORCA`Otto the Otter`Zombies32`lc`nom nom`Juega German`yum yum`djdjdjdjdjdjd`hi`tonyotag`gg`cuty`mota`MasterLeo`ike`Kyle`YOLO`ooooooh noo`brynna`ROOMBA`Jay`Christina`fire`lizabot`GLITTER BUTT`Nub`YUM-YUM `the master`missdee`Fuscao`ouchie`poma`Said`seek`livia`lol`ant`brett`SARAAWESOMEFACE`DOOM`MustachioMan`PootatoQuee`Layla`anaconda`gdf`daplug`lol everyday`fart`HELLO`master ov`dangerous woman`hsjsgihiehreuryu`Kunshiwa`tootie`shrimp flipin`Jillian`fartie mcfartersen`Peeps`List Of Noobs: `gage`abel`savage`i taste like poop`HIURDELYN`jibberish13`bob`YA BOI TYRONE`o()xxx():::::::::::::::>`GOKU`consumerism`AbusamadresjONES`Quicksnake`tee`M E G A S N A K E`you`IDon\'tLikeTheOneEyedSkin`Mister Snake`tinySATAN`The Lambo aid`maggie`XKENNEDYX`Jareds Box`Plumbing Snake `dsa   `R`McDillius`bubble buns`fufufu :3`Snakey McSnakeface`iNFeCTioN`mole`Pope`Yolllps`Zam`Chameleon`hero`Alien`snake of d00m`Seymour`firecracker`i like rice krispies`andrusha`JEPEDEAR`ToeJam`Fungii`ali`matthew`Darwin`Bozo`h3h3                    `kitkat`DONT TOUCH ME`Amek`Dexter`Hypnotizer`Retrobug`the_one_who_knocks`DancingBlueBananas`yes`jotham`weasel`Critical`KING OF THE SNAKES`RainbowDragonEyes`KOSME`Kaspa`clevel`Sarah`Iron Chef`Goose`Avroceptyr`Nimble Navigator`sabina`channing`cow`elite`CJ`wire`Matrix`Hey`miranda`phish`Lucky`Bounty`jgamer`Rebound`Emmitt`LyriX`Panda`Brianna`calvin`mystical`chelle`bot`Filth`Kuavos`slacker`fabian`Toonfirst`sarx543`jjpp<3`rboss`emma`lolipop`the big one`AWESOME GAMER`PARAGONIMUS`Saul`leave me be`Matt Damon `Gianna                  `lexx`nico`bh`Kady`sam`avie`Hank`Big Dog`korea`snake sniper`Espio`v5fdffi`Bum`Sloth`the dude`p`radial floral`Han Solo`JuliaPlayz_`mag`Leo`j3nnif3r`Shriek`germ`beavis`cpt dix`hhhh                    `jtanner `Karen `God Of Worms`kozok`Hodor`Snake That Grows`JOJO`Jvous decalis`King of worms`hgcya`Antani`what what`tyler`whatever`little snakey foo foo`hi`Donald`Carlos`moonowl`frieza`Thunder`cookie`RAPTORS WILL WIN`yoyo`Gumby`hola`Cook111`Anaconda`Amen`Texas`WHY.`melodia`$mira$`Chriz`\'~\'`sammyfireflames `hong kong`master`YOLO`Amerifreedom`oli`Matt`Alli`hun`Savvy Snake`p2`Seth`Babe`WATCHU SAAAAY`Alexis `jj`LUDOPATA`Kwebbelkop`you can eat me`5151`Mcnugget`Miami Heat`Akuma`let\'s team up`Joe `wicked_killerklownz`gdfgf`FlyBoiMann `hi                      `100% AWESOME `spare me.. i have kids`Ry`Priscilla`Mando`rooster`Erin`SAVAGE`King Kong MF`kop`k`cass`DEEZ`I love monkeys`Kylo ren is mine`boss`yayaya`king`Rotton`sabeina`mm7games`friendly worm`Wormie Sanders`Wormie McSquirmie`ouch`watch out, i bite`USA`Cookies4Life`top cheese`hazzzzed`Tatirannosaurus`afffffaaffafffffaaaafa`Dheklin`Emma`SWEG`Brandon`mia`I. DO NOT. CARE`ava`hdjid`Mustachio`sochi`M A D I S O N`GINORMOUS`QooL`omnomasouras`premium munch`Bridget`Surge`Blak`Fulcrum`Tagger`live`lunatic`jojo`Axe Capital`pro gamer`skunky`binary`Ammo`Blargle`death is inevitable`Ariel`BONE`Ambient`Deep`monkey`panic`simon!`i like drums`dutyrhgfdg`Gradient`Goron`myke`CAT POOP NINJA`Freakin\' worms!`Happy`Dakota BH`Vernworm`Scribe`I love this game`Lucifer`murdoc`Snake Muncher`ender`logan`Pepe`Viper`Mikey D`Dawgg`Sticks -N- Stones`KittyKitty`Neuro`hello`Pocky`Hoyle`Sn0w Dr@g0n`Lex Luthor`Elite Mac`Blaxors`BaRt`ADIDAS`Mercy`THE EMPEROR`NeoN`Babyzan`Ground Zero`arvo`Hotwheels`Ally`alyssa`u wot m8?`Tcoy`Jlabbot`Sonic the Snakehog`qwerty`junior`pro+}`flip you`Jane Doe`SnakeFace Killah`robert`pie`Dirty Bird`Paint`WASP`LUCKY`DEMON`smack`wacko`nine`Bronze`Kane`Paco`Mancow`Surucucu`Maholic`Becky`BananaPro`JeNNoCiDe`ZeaL`Zeno\'s Paradox`lex`m8`boris`Wamp`Pink`please be my friend`Rusty`Bud`DoE`Nazgul`COOKIE`Couz`Dazed`HUGo`atomic`fireblade ffirfireblade`FoXX`poopsnoot`Cole`wayoooo`Myst`see you in my stomach`[=- ivy -=]`JAK`Overlord`zig-zag`kakapo`broham`Fetus`Ceaser`Loki`Bobby`yvon`Bama`Christie`el scorcho`one dolla snake`The Storm Surfer`Chubster McDaniel`Buzz`Dude...Seriously??!`twenty dollar peanut`Booka`Asassin8er`Ogre`Oxide`Peon`;)`galit`Clown`Cain`Roman`nanii_is_here`shell`Enderegg336`[MG] masterov`nikki`Sophia`Ju`cameryn`kmass`West Broom Albion`poo`get off me`shaggy`Ledesma`Brou`meechydanko`J`cat`Crystalision`homer`kat`no gods`best game eva`bleach`jellyYT`Make Circles around me`me`Don Worm`taz`tengo hambre :v`fun`baby`Schuy4`CHARA`lib`slither!`wtfffff`Timmons`pj`goku`beerninja`what ever girl`Athoo05`[MG] OvDoom`ljflagg`Orange Extreme`ricky`123`why me?`elrubius`catsnake`amigo`LeMax`Jc`Loading...`slurpie`Trent`demention`Bane`SpOt`flanken`foolio`THAT SWEDISH SNAKE`H a c k e r`Miss Cleo`mouse`GabriellaGabriel`duddy`CGGGGGHGNJGHJYJYJV`Hype`Caustic`i will kill you >:O`axe`plasma`Pandora`Shilo`Federal Agent`atom`Erik`Cube`frog`Cypher`Optical`Glory`Fish`Markiplier`Krynn`Usher`come to me`Fairweather Foe`gooby pls`Candice`Justin Bieber (real!)`Homie`Snowflake`Wojak`MuSuC`ICE`ashlee`ri`Tator`rosa`erickchelo`pablo`I\'m Massive Mate`ELIAS`FREE food to help out`I\'M THE BO$$$$$$$$$$$$$$`dad`Superswaglez`big`[MG]masterov`MarMar`SpiderGwen`DIRTY`Mad Max`Press W to team`shadow`bebe`I\'ll be #1 watch`hippo`fdp`--------`lll`Kamakaziiiii`kb`Badger`andres`hutch`manuman`tnjsjdj`do0d`Spot ON`let me eat u`slitherioguy`kaki`Kat`TNT`Becca`supriseme`Protoman`dannifood4Less`Clark`spooky`The Chose One`crack`M.ov.f`midget`fred`gianna`fanitta`septicgirl`dub step`=]]]]]]]`2.22.16`lissss`adem im so in love w u`Dave`PEACHES`JB`ogmudbonew`aTTention Paid`bernie`spare my life!!`ABODZ`slither Jim`jajaja`cactus`Oklahoma`Pooptart`SlitherA1`gleen`boggs`the  killr`kj\\`Mattie R. H.`Claude`blue1`carobu`cube`evelyn`hila`elias`fffs`maikol`hey`en`Trayvon`adam`Blaze`rscott782 `Tom Riddle`CHINCHILLA`omgomgomg`CPSP`STEW`NOW U DIE!!!!!`rommm`dishes `SHOWTIME`xbox`elastoworm`I\'m hungry`yolo`strong snek`names`Juan`Quake`Zoe`snek`your lady`thion greyjoy`wowza`Phunk`TDub`the cutest snake`frost`Alejo0313`Quebec`mo`ally`TheLordOfSkis`Adam`slimy`BoB`meBigworm`squirm`Mr. Pickles`rsj`Doom`paygo`autumn`levi`amor `Tidal`Destined to be #1`lokening`KrAzY`moot`Cord`happy`Cut`eat`the ol\' spicy keychain`MaYa`Omega`boy`Fly`Inferno`Brotherblood`I\'m vegan`THE WORMINATOR`Jo-E`khott`Fury`Bioten`Lulua`Popcapps`Neuf`sleepy`I\'m Mexican`john wayne`SAM`kj`nanner`LadyGiggles`ghf`Morpheus`H20`YES`SERGIO`Lea`Devil`marie`Photon`Mad Girl`I\'M A RAINBOW`bb8`Faux`Snake Herder`vertigo`Shaq`Dirt`Milk`Mystery Vortex`Huge Mother`Dang`boi`..I..`bells`gchjhkbkl`Pomka09`krystamisseszackkk`j`SWISHY`BOSS LADY`demon`The Top 1%`pui`Tricksterette`hogo`bbc`<3 AleDA <3`spenaso`Ricky is my friend`(TORLL)clan`Taco`Madres`richie`Lightning Bolt`Keelie`NO`rawr`o`TYPICAL GAMER`DODI`Apollo`chandisnidson`pro`Warrior`heheheheheh`ddd`Elwood`bo`CarLie`pop`abol`zeke`[EPIC] LagsterReborn`DOMINO`DarkAngel\'o\'Light`M741`toad`Beaver`SHARP`Aqua`blue`Anita`BoBB`kitty :3`Phun`Dark Destiny`Detox`Fire`Blew`jada`MrsDelgado `Bliz`why`Phreak`Admin`Cue`Don\'t test me`Nick`Bruno`xoxo`fart07`Chow Time!`yeboy`Guatemala `crow`sthilly sthnake`gym`aylin`kenny`matt`fernanfloo`yjhuhuu`Zero`Brady is my bro`comame!!!`Method`pd`kc`hungry snake`$sss`aries`dat boi`Cyco`lithium`Dolo`ick`laura palmer`KJ7`big angel`TrueBlue`extreme danger!!!`bill`gambino`[MG] Master`TheLazerTurtle`I hate you little worms`peaches`AlaskanBullWorm`fblmk;gnfjmnthko;fgbnd`gabby`ball is life`Slash`Loco`TRAPPED`Mounstro `Leviathan `SuperFaustone`Dont try it (Warned)`doc`Merica`hfh`I lag`tori`PooPoo`samuel`mick`Boldar Blood`King`ExtraTerrestrial`greatestwormintheworld`usher`OG Kev`ayy`Xiao Shu`please leave me alone!!`Vote for Pedro`Matuhka`Let\'s try this again `YM`Voldemort`don\'t touch me`KOFIII`u2`Babou`Nana`vinny`bdsusjsjdwj`emily`[MG] For you `:)`LeGPig`nick`gold nuggets `Karley kill u--->`MANDOLIN`L`My dame`james`YOU WILL DIE!!`Sulk`Dolphin`Mazy`raay`sra7794`abbey eats poo`i like turtles`hola`WWW`Snake from state farm`Jake from Snake Farm`Drake from Snake Farm`Jose`MockingJayCR`bite me `khoa`Hannah`Yana`REVENGE`FEED ME`grandma`Skyler`OhFarts`Nickname `tashi`ps900`MasterOv`duke`skyeler`joey`must`DRAKE THE SNAKE`awdawdlsom`slider`m`catch this shade`2lift`tom`cinthya`Ardabil Iran`mam `Kops`Sammie `Launcher`Daf`steel city`Habu`one punch`Franklin`11.6.15`middle of the map`cesauce`Euvel`gosma`emstars10`Maraa`im from atlanta`Im a noob`GraceTyler_07`killer`lissssa`ayyy`Sardean`die everyone`el mas loco`bennie`brandon`po`t55r`Thomas`A`ayy`Searching...`eattherich`JOSH`bit h`you <`Sam`Ima eat everyone`alexander_jbwkz`color`World Records`bean`Shut`king bach`ryanh`kas`Aizlyn`Mac`Cindy`aaa`ugh`Fonsy\'`Pig`Si`Mantwawn`City Of Lights`Federer`humming`im eating an apple`Big D`kaybae`joshua_the_SlayerZ`jonyboy12`$$`briian y diego`ALA`Osvaldo`van du`Can\'tKeepMyScales2MySelf`StanTheMan`peppa pig 10`the Stepup`spicy`Molotov`bryan`not today satan`Ssssssssssssss`Ginabella`AeroRanger100`Redbull`FeedMeBrothers `Rudy`Fernando`eat me`oh piece of candy`khan`Domo`dee`Juan `asdfghjkl`beep beep beep beep beep`jawith`peaches`uncharted`DFD`qwety`nub`actual trash`issac`Japan\'s `BUSTER`Herb`the new one of the world`Banana`frtholikefr`L A V E N D E R`andrii`lance boulderman`LUKE`SEU-JOOJ`Optik`DANGEROUS WOMAN`Puff Daddy`Cobra Commander`malindette`dasher`i grow big`$`moe`daddyO`||LOSERS||`peabody`damyan`Hi`Grave`Billy Jo Yates`Gigantor`Bunny`look at all them worms`henker`rabbit`el chapo`opal`quebec`hello!!!`ben`Pat`pb`Iosif`Katelyn`AlphonseElric`tryme`xxlarissajoyxx `OSCAR`SHUN`y`Princess`doodles`Defalt`Pathetic Attempt`mm`RattleSnakeJake`1st`LILUZI`stacy`Child\'s Play`Grant`djyonce`spy kid 101`albino`PLEASE DON\'T KILL ME`KOBE`G`ttt`dnuts`buttt`lrv`Teddie`special slithery editon`(s)laughter`mjk34`Jonnybananas`the maw`beep beep`teto`fofo`FELIX VARGAS`rt`Pokin Scrote`pmonk`haan`zzz`wake me up inside`jack is poopingggg`please let me get #1`going for 100k`rrrr`owen`randdles`SHASH`crushers secret layer`JakeFromSnakeFarm`Breeeeeeeeeeeeeeeeee`Kota\'s babygirl`lpo`ghzella`8))))))))))))))))))))))`nu`Byahh`cdubs`haaha`pork`tericat`trish`jimy`yung KD`poopoopoopoo`2193`ole`Elan`kolbae`blackwidow`Cordarrel`Kamiikaze`The Beast`mts the king`team?`DON\'T EAT ME!!!`Mayberry`hi your dead`hex`sunshine`Jayden`hungry`WigglyWoo2`951`ja12`korebobjfgj`boossLOL`Nervada`savon`My X`jack`osva`Donut`Matthew`Jobe`get out my way`F caterpillar`QB`I dont like you`Sarah`uto fastnn`jollyjt`Hollywood Undead`paynetrain`ang`SSundee`barbjoob`gee`am`sula`FrenchWolf`Wallynator`harvalousk`Majestic`HODOR`jhjhb`jun`kitty`EAT THIS`EVERYN`1819`kghjnj`og`WILDCARD`cool dude`don\'t touch me!!!!`amirrr`Dang Daniel`dd`watch it!`noice`Hisssss`Moss`goku`tmr`bams`Fabian Gamer`shonny`nike`money18`ladymap`Guac Bowl Merchant`Kiss`Gunnz`Clone`W R A P P E D`bluto`DueX`ksi`cheshire`Croz`I am SLOW`Paste`friesB4guys`Snoop`reeeeee`Jaffar`ormi`Arrow`Airwalk`Spaz`sk8 or die`Milton`john`Husky Wolf`Chazite`Evan`Romeo`Boston`Nate`cash`sdfa`the great gatsby`Flip`princess`Wolfgirl`zombie`Bookworm`fiAscO`eli`hp`Pikachu`\'Murica`jepe`help :\"(er`awesome`Bernardo Sanderinos`momma bear`no`Ashley `barbies`IDA`Suh Dood`?`24`gwenie`Filter`Duane`tyler durden`Dahlia`red`stop pickin on me`_Cubed`Boss`pat`momo`DewLight`yara`Zira`SOMFAFSZV`Dio^-^)`tamalero`TheAngel`Amirah`coldplayisthebest`Rose`jed`noticemesenpai`Josh`bDigital`potus`bsoo`be`carolina`mmm`fhrurir`Snow`rosuko`x`The TURK`Earthworm Jim`hello`[Hero] mimi27`yhhhh`soph`yeeaahh`M`sssssssss`carlos`lil cee`Arash`Crazy`Carson`geo`AniyaHearts`1124`alo`Varamond`ob1`Dip Dizzy Wizzle`Ferris Bueller`big worm`dooda `Slice                   `bessy`Brisk`Bomber`LaMeR`don\'t hurt me :(`Aeon`overnighter`the rat`major gains`Liz`JamesTheWormy`Straight Edge`Lola`skyclops23`mayk`ysnake eyes`cleanup crew`Jim`chelo`Cheese`FEAR ME`MissThugOlfe21`Kik me Excel782`Lil\' Worm`Chet`Dizz`Czibor`flying mint bunny`JAY JAY THe BREKFAST`that guy`Endo`kwik`Vato`Jester`mom`a`Lego`Marvin`aglel`Tadpole`\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"`nummy `Jweezzy_707`JAO VITO`Touch me and your Cursed`big haus`TV`dock`Mr. Daddy`hill`Stivaly`ONYSHCHAK the destroyer`For Every Kill I Rise`Prismic`suppp`Danilo`Sc:AFly.99`teejay.caban`maldo`Atari4600`huhu `boop`Poptart`You will die!!!`Diaz240`girl`JohnCena`concon`Memo`THN`these worms are gross!`ghjhvbj,nk.`whiplash`yess`Zoomer`Mangel`[AG] 123`youtube is life`iFlxsh`105`Smooth Operator`yep it\'s me again...`Trolling`nuthing`katun`H`Max Mad`boo`KLL`lj`kwebbelkop and jelly`nae`Ayam:V:V`woof`ganda`jace`dj`Dantecg`julienne01`jax`lovely`Pink Sheep loves me`^_^`tre`elefante`herman `fkboy`tril for`yup`b`qqqqq`American`Petra`spawn killing=no no`Pa3`ponman`loud fart`tay`Raging noob`twisted`Marroz Is Goddess`Big Daddy K`bkmzc44`robe`Chase the hacker`PIVOT`TEHRAN`YOU CANT READ THIS`JonnyX`kill me`helena`sookie`TOP TEN LEGGGOOO`Logic`runt poop`fux`Whacking Day`naomi`DA BEARS`too big too quick`STC IS THE GREATEST!!!`Cor`Cap`Pumba`PANDA`cheemers `N`clau`the void`erika`bubbyeee`Smuufy`Allie`A:N`steelers fan`emcclana`workwithme`omid`nine mil`Terminator`Keez`yo mama`POOP`Cody`crystal`hoi`dirtykiller`hmatanza`BRENNY`joeytwist1up`Jok`Heguasa`kau`soolak`sodium`EyeGor `timmm                   `Zero Bytez`joh`-shadow-`BAZOOKA666`saahar`Run for your life :]`Feel the BERN`Tsunami`jae`wenom`Minhchie`(MG)masterOv`AJ`BUD `subscribe to Kei`Nintendo`MOFO J. BACON`Nimbus`TROLOLOLOLOLOL`bool`Got a Bern in my wallet`Ashez`qp`Delegato`Domhnall`Kevin`oscar`TREMOR`OOOOOOOOOOOOOOOOOOO`im nice, dont eat me`Adidas NMD_R1`joel`try me`brekkan`vvvmmm`LTHV`Bernie`O`skin suit`Rooobells`K I N G   S N A K E`ANDREW`AstroNestSpicaSOMLynx`game of worms`meep`Broby`get rekt noob`Medeiros `Bad Driver`Trapper`syd`daka`slithery`crzybvr`liquid`lel`I like you`ninja`RAYRAY`Cache`FaCe YouR FeaRs`Delphinio`Cool Snake #1`piggy`DEWEZ`Dokdo = Korea`Angel`Dicey21`fat mike`YAY DOTS`Hydra`basher`im a noob :(`Arlene`Chaos`Jeffrey`jackal`holier`agbd`D1`Ape`uhhhh`sf~:,39`justin biebier`tasty soup time`Bernie Sanders`caos`Joker`KING`dirge`liv`Taylor`Scrubs`LILWORM`miz`ag`Bluefireify`Mal`0`Xiikiitop`Meli`NEWRECORD`Nhao\' Vo^ Kiem\' An!!!!!`arda`sosa`tina `wojtek`Gauntlets gaming`bad luck `cris the bAller `macbeth`Hobbes`Don\'t  please`Toxic`swashbuckler`pab0`Hax`big snake`041mike`tri $ta`...oooOOOooo...`NOM NOM NOM`Sephiroth <3`BekaWolf`#1`SADRAZAM`Acid`Bob`Spawn`ChunkyyEyes`Mecca`try hard people in game`wilsnakeon`@----(------>`HI HOW ARE YOU?`fair `an`canada`itsAbig1`avocado`eyeball`poop`Alejandra....`he\'ll no`YOU LOST`Yellow!`timicc`ep`khaleesi`[HERO] PURPL3 KITTI3`rr14`Doctor Snakeberg`I RULE THE CENTER`bubb`JC`Ctrl`mendingo`Pete McPython`moali`Merticus`HellDoor`Darude - Sandtorm`emotion girl`Blo`turk girl`Sad worm`nom nom nom`Big Dough`bop`Blazer`c`please clap`@$&@.....`Sick`gg`Lana_Del_Snek`aj`Flare`proud alfalfa`LJ`Nightmare pig`:3`b eatn u`.`jacob`veer`NAIMAN`SNAKES`INDIA`ACUV6`gizmo`oh hi`last one`toto`iluu`smd`champ`jvalles`GSG`sine wave`asdfjkl;`MAGz`kirbyt`MAF`Scavenger`help`twobabyducks`Hotshot_______7`maicol_504`Baz`i love slither.io`Zebo`Oz`new`vuj`Rubinho`CccCurtis`hjbjnkhbkhvkhvjhviycuvjv`Eriq`grrrrrrrrrrr bark`hungry hippo`DantBOi`Jride`MASTER PO`SnakeInEagle\'sEar`ni`ayo`deez nuts`Snake on a 2D plane`bruce`serbia idemooo`Akif tutus,`DK`Tony Blacks`hsjfnfnakfndnskfbfnnfnj`sorry mom`el jose`Jaynerf`zmijaaa`El piton`Romik`MadeYouSplit:D`Erik<3`Dane Chris`cough`Kobe`Chase`el salvador`Nitrous`Lorde`dami`Q-Tip`R.C.`Nexus`call your parents`fuzzy snake`grim reaper`guru`newbie`lily`Crossfade`owwie`Brad`Apocalypse`Cameo`Andrew`kid`AT&T `niuB`marie <3`Putin`Soul`Flava`Hopsin`wormy`hold the door`Jesta`PopularMMOs`da preacha`Ashy`[HERO] Rockhound06`lisa simpson`jUMBO`~!~!~42GINGRSPICE42~!~!~`tori_ann1`Glitter & Doom`Ryan `Kanye West`fff`udara`views`TIJUANA MX`Elsa `k patel`Moodie `voss`WarZ0ne`jjj`BI BI BI`SUMADREHPTA`Siam`arcadego`MMatixo`tuou`What A GOD`EUGENESAGAZ`HOLD THE DOOR`tung`peluuka.gram`Raps in 6`ErtErtErtErt `DevilPhart`EatUm`NOOB`Haze`Mute`ruthless`omen`jeppe`killer`ToxicFlyer`irmuun`eh`ELi`peachtoad`BMW`Az`Drake`Ebby`kaan`runnnnn`great game`sasasasasa`chunk`Paulo`mop`nadiacraftt`henk`Lk`bigydargan`$_$_I_iU_nCt_$_$`high`SEATTLE2 `weekwah`GTA5 `bal`YUMYUMYUM`shenron`Dip`ALEX`Star Slither`lil boose`jeb!!`re`yumyumz`looner `JakethesweetSnake`jody `Nom Nom Nom`11111`MY BANANA`Shakira`bambam`Spider-Man `I got a big big booty`kk`slitherin her DMs like`hg`jespo`1000%%`AG`bad at slither`run around and scream!`e`fccccc`Kavish`yusuf`savage af `sssssss`William Snakespeare`Bot`Hawai`Adrian`QuinnXCII`extradrops `5k nmmmmmmmmmm`slog`buncha jerkfaces`earthquake`Feeeedd Mmmeee!!!`gwen`Balduz`110011`danu`Tiny`565`savage `The Illuminator`Daisy`Jiggly Jello`dx`Skinny`akira`noah`MRtermi101`Protomic`jacobbbb`alanis`kuba`leave me alone!`schlingelchen`bird`Scorpio`ggu`Not afraid of MG`catdog`1111`steven`kjhchl`toven`E D A`Regina`Slayer!`wwwwwwwwwwwwwwww`ratz`Inga`slim`DBZ`**killer** MOCKBA`Sans Cena`tex`Dye`Frodo Baggins`Cryptical`#RedMachine`DEADLY SNAKE...STAY AWAY`cenko`<<<fjdlafjdla>>>`Dino`Brizzaro`Lil Mama`pewdiepie`fame`thatbrothakd`RaSkO`MrGame`~*~*~*~Wissy~*~*~*~`ILikeDonuts`Brady 2020`Onyx`Torch`evil snake`Blip`1 I`Cthuhlu`Cutie`Killah`Risk Taker`Mr king`Crow`i LOVE THIS GAME`DA CHESSSSSSSSSSSSSSBOX`soomi`travis`GOTCHA!!`Riv`mike`Droid`tokes412`WR`Austin Mac`Worm`huy`Johnny Depp`NAS`Poster Child`pp`ellen`Dunk Diver`Mephisto`TOMY`fffacffa`jeb is a mess`doll-e`I will eat u all`Mike`SSSniperwolf`smma`juicy juice`MG BRAYDEN`COLOMBIA`sibal`beep`seli`MIDNIGHT SNACK`dantdm`Christiana`...00...ww`jules`Dark`JoJo`kid123`BRAAP`jair***elteam$`nice`V_V Black Mamba`fake`@#%!`robrt`PENGUIN`freddy`slimy slug`vman`5555`ris`129`omar`EAT`Duck luck`Nelson`Nemo`breakfast`\\(^-^): Majik411`back off`ellie`Abraham`Hol Mah Rangs`huj`LEO-PERU`bubba`Terminator`noon`Hypah`piksaasd`Alright`TurnTheSaige`rick`blackhamer `Clear`Kodak`nune`Almor Fjalberd`DTP`Cloud`ash`don\'t touch me!`katie`Falkor`dream`catch me if you can`dammmmmnnnn`Blame The Lag `Emilie Autumn`PewDiePie`sifting`please run into me`68k`Cybo`bobo`jinx`PERU #1`Hey you`hfhdjejsbf`Chatta`looooooooooooooooong`stranger danger`No one`Angie`[BERN] Ghost`+--(T3T)--+`hey you!`Flea`jordvn`LITTLE BANANA`Snake Cop`lol :)`eatme`f5g`Sasuke`maaxwell`Dema`the smurf`Batsnake`Beyond`What If Zelda Was A Girl`DiSaStEr`Goofy`Gazelle`Cypris`Seahawk`laura`Logik`BoA`Drawball`Krakatau`vanessa`Dogg`Boba`dan`come get me`STuSSy`Czar`Cobra`Jaguar`banzi`E R R O R`miss flockhart`PSYCHO`Mi Primera Vez`Candy`evgenlox`iphone6s`sese`Phat`Fred Fred burger`septiceye`maverick`alex`gorgeousgoof`VVish`SuperWog`FabianXD`suh dude `ops`Blue Berry`slurpie`zee`NSNSN`Rider`Sos`jojo`jamie#3`Tuan`ajax`my kill MY FOOD`TATA`i.hate.my.haircut`MANDRGA`GoddessDemon`Szymi04`yo man`sara`dragon`The Duck`The Wolf`Snake Silencer`shylee`PLEASE! !!!`banksy`under the rainbow`Dat Boi`biu`K`QUEENB`anathema`i gon eat yo life source`american dream`sol`Sup dun sun`hehe`MarkiTHEMOOMOO`master blaster`imonanewlevel`Springtrap`zombie_killer`ich schlange`I love blue`sk`CKY`stamook`ok`La Fox`CANADA RULES`andrey`Eat me !!!`I love hockey`Bernie2016`Joe Dirt`dfg`Mr. Slithers`vdfg`elf`outlaw`mary`michellebelle`RaihanNakNuha`ele`Fate`fion`I am Adele`arianemm`zanerzane`Dono`leandro`whitney`Snake Smacker`Fetch`bellsnall`Proud_Jamaican`fang`Chop`lazy snake`orange`yessir`Diva`here we go agin`adio`Dine&Dash`freak`diablo`Ma$e`Blur`Snap`wurm`hornet`Trauma`Dinner time`MM`AAA`This Game Is Cannibalism`suh`athena`Apex`squeamish`navysnake`cyclone`Centipede`Squirmy Wormy`stereo`mafioso`louie`sergy`unicorn`jsun`yemeyinn :D`Franklin James Cat`Sour Gummi Worm`FUNNY names makes on TOP`BB`222`SERGIO`Coaster`Homer Simpson`Gurl`Dante`guter`serial`Cubb`danomite`File`anoop `I Like Beans`bug`Eattt Meee`wormie`freyja`Roll Tide`Belle`rip prince`beast boy414`READY TO DIE`IllusiveUprise`erock`slithery flow`watch out`goaway`Jumbo`premium scrunch`molly`azerum`angry beaver`Nyeh Heh Heh!`turk`Setra`Lieutenant`wert08TCDD`Adj`Thedimondminecrat`lynne`My Name Is Jeff`tampon`MIMKA`greedo`dubdriver`anstantino`Ouch`satan`can\'t sleep`julianchis`445`cure`Hillo`Chadderandom`pawel`soy noob`zackw`710`let me liveeeeee`kingcal`NICK THE NAME`jelly`wiki123ks`BFAM`KC`zoberk`PIG`ffggh`Jelly`Burning Snake`wow`The White Rabbit`lukemeister`Live Die Repeat`KEEPER OF THE SNAKES`Qberr`Nickname`Epic`NONO_16`CheetahHawk`fgdsa`frig.`ghostar`8==o`queen bey`krazykay`emilhlauritsen`mert`hamza`killit before itlayseggs`BLITZ WINGER 2.0`tips`niam`BRE`cute kitty`MaTo`hicrush`Stumpy`Zilla`cy`1`528`creuse ta  tombe `Bsaa`Beebop`MissTiff`ProScripter`Tnxcya`KING ET`SAVAGE SNAKE`iris`no kill me`sniper `mmm delicious water`Chewie";
names = names.split("`");

module.exports = {
    serverPort : serverPort,
    rooms : rooms,
    userlist : userlist,
    roomNo : roomNo,
    botNo : botNo,
    startingPoint : startingPoint,
    palette : palette,
    names : names
}