const FilterParks = (activities, query) => {
  if (!query) {
      return activities;
  }

  return activities.filter((act) => {
      const activitiesName = act.activities.toLowerCase();
      return activitiesName.includes(query.toLowerCase());
  });
};

export default FilterParks;