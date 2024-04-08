import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const WorkIcon = () => (
  <i className="mt-2 text-base md:md:text-lg">
    <FontAwesomeIcon icon={faBriefcase} />
  </i>
);
const BuildingIcon = () => (
  <i className="mt-2 text-base md:text-lg">
    <FontAwesomeIcon icon={faBuilding} />
  </i>
);
const AchievementIcon = () => (
  <i className="mt-2 text-base md:text-lg">
    <FontAwesomeIcon icon={faTrophy} />
  </i>
);
const TickIcon = () => (
  <i className="mt-2 text-base md:text-lg">
    <FontAwesomeIcon icon={faBriefcase} />
  </i>
);
const House = () => (
  <i className="mt-2 text-base md:text-lg">
    <FontAwesomeIcon icon={faBriefcase} />
  </i>
);

export const TimelineData = [
  {
    id: 1,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <WorkIcon />,
  },
  {
    id: 2,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <BuildingIcon />,
  },
  {
    id: 3,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <BuildingIcon />,
  },
  {
    id: 4,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <BuildingIcon />,
  },
  {
    id: 5,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <BuildingIcon />,
  },
  {
    id: 6,
    title: "The Beginning",
    date: "2015 B.S. / 1958 A.D.",
    description:
      "Started with clay-based paints and varnishes for traditional mud and wooden constructions in Kathmandu valley sourcing from thimi and pharping.",
    icon: <BuildingIcon />,
  },
  // Additional timeline data...
];
