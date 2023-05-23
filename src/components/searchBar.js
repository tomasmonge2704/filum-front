import { SearchIcon } from "@/components/icons/serchIcon";
import { Input } from "@nextui-org/react";
export default function SearchBar ({setSearchTerm}) {
    const handleSearchBar = (e) => {
        setSearchTerm(e.target.value);
      };
    return (
        <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              onChange={handleSearchBar}
              placeholder="Search..."
            />
    )
}