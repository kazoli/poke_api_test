/**
 * Empty list component if no pokemon to related conditions
 * @date 2023. 01. 03. - 11:07:25
 *
 * @returns {JSX.Element}
 */
function ListEmpty() {
  return (
    <section className="mt-[20px] sm:mt-[50px] border border-[#d0d0d0] text-[#404040] p-[5px] rounded-[2px] shadow-[inset_0_0_10px_0_#f6ce09]">
      No pokemon found
    </section>
  );
}

export default ListEmpty;
