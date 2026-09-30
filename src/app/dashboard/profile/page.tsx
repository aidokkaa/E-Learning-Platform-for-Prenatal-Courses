// import { currentUser } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BookOpen, User, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

// export default async function AccountPage() {
//   const user = await currentUser();

//   if (!user) {
//     redirect('/sign-in');
//   }
//   const enrolledCourses = (user.publicMetadata?.enrolledCourses as string[]) || [];

//   return (
//     <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">Personal Account</h1>
//           <p className="text-slate-600 mt-1">Manage your profile and access your enrolled courses.</p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
//           <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-50 shadow-inner flex-shrink-0">
//             {user.imageUrl ? (
//               <Image
//                 src={user.imageUrl}
//                 alt={user.firstName || 'User Avatar'}
//                 fill
//                 className="object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-2xl">
//                 {user.firstName?.[0] || 'U'}
//               </div>
//             )}
//           </div>

//           <div className="flex-1 text-center sm:text-left space-y-2">
//             <h2 className="text-2xl font-bold text-slate-900">
//               {user.firstName} {user.lastName}
//             </h2>
            
//             <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-600 pt-1">
//               <div className="flex items-center gap-1.5">
//                 <Mail className="w-4 h-4 text-slate-400" />
//                 <span>{user.emailAddresses[0]?.emailAddress}</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <Calendar className="w-4 h-4 text-slate-400" />
//                 <span>Joined {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
//               <BookOpen className="w-5 h-5 text-indigo-600" />
//               My Enrolled Courses ({enrolledCourses.length})
//             </h2>
//           </div>

//           {enrolledCourses.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {enrolledCourses.map((courseSlug, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
//                 >
//                   <div className="space-y-2">
//                     <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
//                       <CheckCircle className="w-3.5 h-3.5" />
//                       Active Enrollment
//                     </div>
//                     <h3 className="text-lg font-bold text-slate-900 capitalize">
//                       {courseSlug.replace(/-/g, ' ')}
//                     </h3>
//                     <p className="text-sm text-slate-600">
//                       You have full access to all course materials and support.
//                     </p>
//                   </div>

//                   <div className="pt-6">
//                     <Link
//                       href={`/courses/${courseSlug}`}
//                       className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm"
//                     >
//                       Go to Course
//                       <ArrowRight className="w-4 h-4" />
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
//               <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
//                 <BookOpen className="w-6 h-6" />
//               </div>
//               <h3 className="text-base font-semibold text-slate-900">No courses yet</h3>
//               <p className="text-sm text-slate-500 max-w-sm mx-auto">
//                 You haven&apos;t enrolled in any courses yet. Explore our available programs and start learning today!
//               </p>
//               <div className="pt-2">
//                 <Link
//                   href="/#courses"
//                   className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
//                 >
//                   Browse Courses &rarr;
//                 </Link>
//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }


import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, User, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Comfortaa, Quicksand } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

/* false — всегда круг цвета сайта с первой буквой (как в навбаре).
   true  — показывать фото профиля, если оно есть (у входа через Google это может быть цветной кружок от Google). */
const USE_PROFILE_PHOTO = false;

export default async function AccountPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/sign-in');
  }
  const enrolledCourses = (user.publicMetadata?.enrolledCourses as string[]) || [];

  return (
    // calc(100vh - 90px): высота экрана минус навбар, чтобы страница без футера помещалась целиком
    <div className={`${quicksand.className} min-h-[calc(100vh-90px)] bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10`}>
      <div className="mx-auto max-w-[960px] space-y-6 lg:space-y-7">
        {/* Заголовок страницы */}
        <div>
          <h1
            className={`${comfortaa.className} font-light leading-[1.2] text-[#4A1E0C]`}
            style={{ fontSize: 'clamp(24px,2.4vw,34px)' }}
          >
            Personal Account
          </h1>
          <p className="mt-1.5 text-[14px] leading-[1.6] text-[#6B4A3B] lg:text-[15px]">
            Manage your profile and access your enrolled courses.
          </p>
        </div>

        {/* Карточка профиля */}
        <div className="flex flex-col items-center gap-5 rounded-[24px] border border-[#F0E1D6] bg-white p-5 shadow-[0_10px_30px_rgba(74,30,12,0.05)] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-[3px] border-[#F4E3D8] shadow-[0_8px_20px_rgba(74,30,12,0.12)]">
            {USE_PROFILE_PHOTO && user.imageUrl ? (
              <Image
                src={user.imageUrl}
                alt={user.firstName || 'User Avatar'}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className={`${comfortaa.className} flex h-full w-full items-center justify-center bg-[#412B1A] text-2xl font-semibold text-[#FFF6F0]`}
              >
                {(user.firstName?.[0] || 'U').toUpperCase()}
              </div>
            )}
          </div>

          <div className="flex-1 space-y-2.5 text-center sm:text-left">
            <h2
              className={`${comfortaa.className} text-[20px] font-medium leading-tight text-[#4A1E0C] sm:text-[22px]`}
            >
              {user.firstName} {user.lastName}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[13px] text-[#6B4A3B] sm:justify-start">
              <div className="flex items-center gap-2 rounded-full bg-[#FBF3EC] px-3 py-1.5">
                <Mail className="h-3.5 w-3.5 text-[#1F5B58]" />
                <span>{user.emailAddresses[0]?.emailAddress}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#FBF3EC] px-3 py-1.5">
                <Calendar className="h-3.5 w-3.5 text-[#1F5B58]" />
                <span>Joined {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Мои курсы */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2
              className={`${comfortaa.className} flex items-center gap-2.5 text-[17px] font-medium text-[#4A1E0C] lg:text-[19px]`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F7E7DC] text-[#1F5B58]">
                <BookOpen className="h-[18px] w-[18px]" />
              </span>
              My Enrolled Courses ({enrolledCourses.length})
            </h2>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
              {enrolledCourses.map((courseSlug, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#F0E1D6] bg-white p-6 shadow-[0_10px_30px_rgba(74,30,12,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#DDB99F] hover:shadow-[0_20px_44px_rgba(74,30,12,0.10)]"
                >
                  {/* Тонкая акцентная линия сверху при наведении */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-8 top-0 h-[3px] origin-center scale-x-0 rounded-b-full bg-[#1F5B58] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <div className="space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1F5B58]/10 px-3 py-1 text-[12px] font-semibold text-[#1F5B58]">
                      <CheckCircle className="h-3.5 w-3.5" />
                      Active Enrollment
                    </div>
                    <h3
                      className={`${comfortaa.className} text-[18px] font-medium capitalize leading-[1.3] text-[#4A1E0C]`}
                    >
                      {courseSlug.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-[#6B4A3B]">
                      You have full access to all course materials and support.
                    </p>
                  </div>

                  <div className="pt-5">
                    <Link
                      href={`/courses/${courseSlug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F5B58] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_6px_16px_rgba(31,91,88,0.18)] transition hover:-translate-y-0.5 hover:bg-[#194a48] active:translate-y-0"
                    >
                      Go to Course
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2.5 rounded-[24px] border border-dashed border-[#DDB99F] bg-[#FDF8F4] p-7 text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#F7E7DC] text-[#1F5B58]">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3
                className={`${comfortaa.className} text-[17px] font-medium text-[#4A1E0C]`}
              >
                No courses yet
              </h3>
              <p className="mx-auto max-w-sm text-[14px] leading-[1.65] text-[#6B4A3B]">
                You haven&apos;t enrolled in any courses yet. Explore our available programs and start learning today!
              </p>
              <div className="pt-1">
                <Link
                  href="/#courses"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1F5B58] transition-colors hover:text-[#194a48]"
                >
                  Browse Courses &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
