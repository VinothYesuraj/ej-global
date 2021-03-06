ej.addCulture( "gd", {
	name: "gd",
	englishName: "Scottish Gaelic",
	nativeName: "Gàidhlig",
	language: "gd",
	numberFormat: {
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		currency: {
			pattern: ["-$n","$n"],
			symbol: "£"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["DiDòmhnaich","DiLuain","DiMàirt","DiCiadain","DiarDaoin","DihAoine","DiSathairne"],
				namesAbbr: ["DiD","DiL","DiM","DiC","Dia","Dih","DiS"],
				namesShort: ["Dò","Lu","Mà","Ci","Da","Ao","Sa"]
			},
			months: {
				names: ["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd",""],
				namesAbbr: ["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh",""]
			},
			monthsGenitive: {
				names: ["dhen Fhaoilleach","dhen Ghearran","dhen Mhàrt","dhen Ghiblean","dhen Chèitean","dhen Ògmhios","dhen Iuchar","dhen Lùnastal","dhen t-Sultain","dhen Dàmhair","dhen t-Samhain","dhen Dùbhlachd",""],
				namesAbbr: ["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh",""]
			},
			AM: ["m","m","M"],
			PM: ["f","f","F"],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
