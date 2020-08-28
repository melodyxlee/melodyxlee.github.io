var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#e0f2ff",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
	{
		"id": "BE",
		"showAsSelected": true
	},
	{
		"id": "FR",
		"showAsSelected": true
	},
	{
		"id": "DE",
		"showAsSelected": true
	},
	{
		"id": "GR",
		"showAsSelected": true
	},
	{
		"id": "IT",
		"showAsSelected": true
	},
	{
		"id": "ES",
		"showAsSelected": true
	},
	{
		"id": "TR",
		"showAsSelected": true
	},
	{
		"id": "VA",
		"showAsSelected": true
	},
	{
		"id": "BS",
		"showAsSelected": true
	},
	{
		"id": "BZ",
		"showAsSelected": true
	},
	{
		"id": "CA",
		"showAsSelected": true
	},
	{
		"id": "KY",
		"showAsSelected": true
	},
	{
		"id": "HN",
		"showAsSelected": true
	},
	{
		"id": "JM",
		"showAsSelected": true
	},
	{
		"id": "MX",
		"showAsSelected": true
	},
	{
		"id": "PR",
		"showAsSelected": true
	},
	{
		"id": "TC",
		"showAsSelected": true
	},
	{
		"id": "US",
		"showAsSelected": true
	},
	{
		"id": "VI",
		"showAsSelected": true
	},
	{
		"id": "KH",
		"showAsSelected": true
	},
	{
		"id": "CN",
		"showAsSelected": true
	},
	{
		"id": "ID",
		"showAsSelected": true
	},
	{
		"id": "MY",
		"showAsSelected": true
	},
	{
		"id": "SG",
		"showAsSelected": true
	},
	{
		"id": "TH",
		"showAsSelected": true
	},
	{
		"id": "VN",
		"showAsSelected": true
	}
]
},
areasSettings : {
autoZoom : true,
color : "#dbdbdb",
colorSolid : "#a9d6cb",
selectedColor : "#a9d6cb",
outlineColor : "#555555",
rollOverColor : "#d5efd0",
rollOverOutlineColor : "#555555"
}
});