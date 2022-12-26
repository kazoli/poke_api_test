import SearchElementLayout from './SearchElementLayout';
import SearchCategoryTrigger from './SearchTypeTrigger';
import DropDownMenu from '../general/DropDownMenu';
import SearchCategoryElement from './SearchTypeElement';

function SearchBar() {
  return (
    <section className="flex flex-wrap-reverse gap-[15px] relative">
      <SearchElementLayout className="flex-[1_1_auto]">
        <DropDownMenu
          trigger={<SearchCategoryTrigger selectedType="Select a type" />}
          classContainer="w-[100%]"
          classList="peer-focus:grid active:grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-[15px] left-0 right-0 mt-[30px] border border-[#000] p-[15px] rounded-[2px] bg-[#fcfefe] shadow-[inset_0_0_50px_0_#b1dcf1]"
          classElement="cursor-pointer border border-[#000000] p-[5px] bg-[#fff] rounded-[2px]"
          options={{
            ctg1: <SearchCategoryElement typeName={'Category1'} />,
            ctg2: <SearchCategoryElement typeName={'Category2'} />,
            ctg3: <SearchCategoryElement typeName={'Category3'} />,
            ctg4: <SearchCategoryElement typeName={'Category4'} />,
            ctg5: <SearchCategoryElement typeName={'Category5'} />,
            ctg6: <SearchCategoryElement typeName={'Category6'} />,
            ctg7: <SearchCategoryElement typeName={'Category7'} />,
            ctg8: <SearchCategoryElement typeName={'Category8'} />,
            ctg9: <SearchCategoryElement typeName={'Category9'} />,
            ctg10: <SearchCategoryElement typeName={'Category10'} />,
          }}
          action={(value) => console.log(value)}
        />
      </SearchElementLayout>
      <SearchElementLayout className="flex-[10000_10000_370px]">
        <input
          type="text"
          autoComplete="off"
          placeholder="Type Pokémon's name"
          className="flex-[1_1_auto] mx-[10px]"
        />
        <button className="flex items-center uppercase text-[#3c9ed8] font-bold rounded-[2rem] p-[0_10px] transition-all hover:shadow-[0_0_5px_1px_#247eb2] hover:text-[#ffffff] hover:bg-[#2b96d4]">
          Search
        </button>
      </SearchElementLayout>
    </section>
  );
}

export default SearchBar;
