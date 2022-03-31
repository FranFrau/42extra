import router from "next/router";

import { Action, Priority } from "kbar";

export const userActions = (login: string, section: string): Action[] => [
	{
		id: "userOverview",
		name: "Overview",
		shortcut: ["o"],
		section: section,
		perform: () => router.push(`/users/${login}`),
		priority: Priority.HIGH,
	},
	{
		id: "userProjects",
		name: "Projects",
		shortcut: ["p"],
		keywords: "cursus",
		section: section,
		perform: () => router.push(`/users/${login}/projects`),
		priority: Priority.HIGH,
	},
	{
		id: "userQuests",
		name: "Quests",
		shortcut: ["q"],
		keywords: "common core",
		section: section,
		perform: () => router.push(`/users/${login}/quests`),
		priority: Priority.HIGH,
	},
	{
		id: "userAchievements",
		name: "Achievements",
		shortcut: ["a"],
		section: section,
		perform: () => router.push(`/users/${login}/achievements`),
		priority: Priority.HIGH,
	},
	{
		id: "userLocations",
		name: "Locations",
		shortcut: ["l"],
		keywords: "cluster place",
		section: section,
		perform: () => router.push(`/users/${login}/locations`),
		priority: Priority.HIGH,
	},
	{
		id: "userScales",
		name: "Scales",
		keywords: "evaluations",
		section: section,
		perform: () => router.push(`/users/${login}/scales`),
		priority: Priority.HIGH,
	},
	{
		id: "userPatronages",
		name: "Patronages",
		section: section,
		perform: () => router.push(`/users/${login}/patronages`),
		priority: Priority.HIGH,
	},
	{
		id: "userPartnerships",
		name: "Partnerships",
		keywords: "company companies",
		section: section,
		perform: () => router.push(`/users/${login}/partnerships`),
		priority: Priority.HIGH,
	},
	{
		id: "userApps",
		name: "Apps",
		section: section,
		perform: () => router.push(`/users/${login}/apps`),
		priority: Priority.HIGH,
	},
];
