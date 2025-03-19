import "./style.css";
export const DailyPoints = () => {
  const getSeason = (month: number): string => {
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    return "winter";
  };

  const getSeasonStart = (season: string, year: number): Date => {
    switch (season) {
      case "spring":
        return new Date(`${year}-03-01`);
      case "summer":
        return new Date(`${year}-06-01`);
      case "autumn":
        return new Date(`${year}-09-01`);
      case "winter":
        return new Date(`${year}-12-01`);
      default:
        return new Date(`${year}-01-01`);
    }
  };

  const calculateDailyPoints = () => {
    const today = new Date();
    const season = getSeason(today.getMonth() + 1);
    const seasonStart = getSeasonStart(season, today.getFullYear());
    const dayOfSeason =
      Math.floor(
        (today.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;

    let points = 2;
    if (dayOfSeason === 2) points = 3;
    else if (dayOfSeason > 2) {
      let prevPoints = 3;
      for (let i = 3; i <= dayOfSeason; i++) {
        points = Math.round(prevPoints + prevPoints * 0.6);
        prevPoints = points;
      }
    }

    return points > 1000 ? `${Math.round(points / 1000)}K` : points;
  };
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dailyPoints = calculateDailyPoints();

  return (
    <div className="daily-points">
      <h3 className="text tcolor2">Daily Points</h3>
      <h5 className="text tcolor6">{dailyPoints}</h5>
    </div>
  );
};
