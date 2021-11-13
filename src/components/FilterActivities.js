const FilterActivities = (activities, query) => {
  if (!query) {
      return activities;
  }

  return activities.filter((act) => {
      const activitiesName = act.name.toLowerCase();
      return activitiesName.includes(query.toLowerCase());
  });
};

export default FilterActivities;