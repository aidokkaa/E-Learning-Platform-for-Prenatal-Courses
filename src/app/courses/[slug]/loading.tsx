export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
        
        {/* Левая колонка — Текст курса */}
        <div className="space-y-6">
          <div className="h-6 w-32 bg-[#EFE4DC] rounded-full"></div>
          <div className="h-10 w-4/5 bg-[#EFE4DC] rounded-xl"></div>
          <div className="h-6 w-2/3 bg-[#EFE4DC] rounded-xl"></div>
          <div className="space-y-3 pt-4">
            <div className="h-4 w-full bg-[#EFE4DC] rounded"></div>
            <div className="h-4 w-5/6 bg-[#EFE4DC] rounded"></div>
            <div className="h-4 w-3/4 bg-[#EFE4DC] rounded"></div>
          </div>
        </div>

        {/* Правая колонка — Форма */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E8D8CD] space-y-6 shadow-sm">
          <div className="h-7 w-48 bg-[#EFE4DC] rounded-lg mb-6"></div>
          
          {/* Инпуты */}
          <div className="space-y-4">
            <div className="h-12 bg-[#F7F1EC] rounded-xl w-full"></div>
            <div className="h-12 bg-[#F7F1EC] rounded-xl w-full"></div>
            <div className="h-12 bg-[#F7F1EC] rounded-xl w-full"></div>
          </div>

          {/* Кнопка */}
          <div className="h-12 bg-[#EFE4DC] rounded-xl w-full mt-6"></div>
        </div>

      </div>
    </div>
  );
}