import * as S from "./aside.styles";
import { Option } from "../../components/option";
import { useSection } from "../../hooks/useSection";
import { NavOptionsArr } from "../../utils/navigation/index";

import ActiveTop from "../../../public/assets/images/general/sidePagination/scroll-prev.png";
import InactiveTop from "../../../public/assets/images/general/sidePagination/prev-gray.png";
import ActiveBottom from "../../../public/assets/images/general/sidePagination/scroll-next.png";
import InactiveBottom from "../../../public/assets/images/general/sidePagination/next-gray.png";
import { useCharacter } from "hooks/useCharacter";
import { ResponsiveImage } from "utils/functions";

export const Aside = () => {
  const { activeCharacter } = useCharacter()
  const { activePage, setActivePage } = useSection();
  return (
    <S.aside css={{ filter:`hue-rotate(${activeCharacter.hueRotate})`}}>
      <ResponsiveImage />
      <S.upArrow
        type="button"
        css={{
          bg: {
            i: activePage > 1 ? ActiveTop.src : InactiveTop.src,
            p: "center",
            s: "100%",
          },
          // filter:`hue-rotate(${activeCharacter.hueRotate})`
        }}
        />
      <S.ul css={{ transform: `translateY(${245 + activePage * -70}px)` }}>
        {NavOptionsArr.map((options) => {
          return (
            <Option
            key={options.page}
            text={options.number || ""}
            w={30}
            h={30}
            isActive={activePage === options.page}
            action={() => setActivePage(options.page || 0)}
            />
            );
          })}
      </S.ul>
      <S.downArrow
        type="button"
        css={{
          bg: {
            i: activePage < 7 ? ActiveBottom.src : InactiveBottom.src,
            p: "center",
            s: "100%",
          },
          // filter:`hue-rotate(${activeCharacter.hueRotate})`
        }}
      />
    </S.aside>
  );
};
