import React from "react";

import Ranked from "../../../../components/svgs/Ranked";
import OneOnOne from "../../../../components/svgs/OneOnOne";
import Casual from "../../../../components/svgs/Casual";
import Practice from "../../../../components/svgs/Practice";

export type CategoryTitles = "Ranked" | "Duel 1x1" | "Casual" | "Practice";

export const categories: { title: CategoryTitles; svg: JSX.Element }[] = [
  {
    title: "Ranked",
    svg: <Ranked />,
  },
  {
    title: "Duel 1x1",
    svg: <OneOnOne />,
  },
  {
    title: "Casual",
    svg: <Casual />,
  },
  {
    title: "Practice",
    svg: <Practice />,
  },
];
