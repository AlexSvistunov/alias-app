import { useSelector } from "react-redux";

const useGetTeam = () => {
  const teamList = useSelector(state => state.team.teamList)

  return teamList

}

export default useGetTeam