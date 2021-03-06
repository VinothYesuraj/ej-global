ej.addCulture( "zu", {
	name: "zu",
	englishName: "isiZulu",
	nativeName: "isiZulu",
	language: "zu",
	numberFormat: {
		percent: {
			pattern: ["-%n","%n"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			days: {
				names: ["iSonto","uMsombuluko","uLwesibili","uLwesithathu","uLwesine","uLwesihlanu","uMgqibelo"],
				namesAbbr: ["Son.","Mso.","Bi.","Tha.","Ne.","Hla.","Mgq."],
				namesShort: ["So","Ms","Bi","Th","Ne","Hl","Mg"]
			},
			months: {
				names: ["Januwari","Febhuwari","Mashi","Ephreli","Meyi","Juni","Julayi","Agasti","Septemba","Okthoba","Novemba","Disemba",""],
				namesAbbr: ["Jan","Feb","Mas","Eph","Mey","Jun","Jul","Agas","Sep","Okt","Nov","Dis",""]
			},
			AM: ["Ntambama","ntambama","NTAMBAMA"],
			PM: ["Ekuseni","ekuseni","EKUSENI"],
			patterns: {
				d: "dd-MM-yyyy",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt",
				M: "d MMMM"
			}
		}
	}
});
