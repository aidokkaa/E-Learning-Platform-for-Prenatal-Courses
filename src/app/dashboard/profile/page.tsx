import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, User, Mail, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

export default async function AccountPage() {
  // 1. Получаем текущего пользователя на сервере
  const user = await currentUser();

  // Если пользователь не залогинен, перенаправляем на страницу входа
  if (!user) {
    redirect('/sign-in');
  }

  // 2. Достаем список записанных курсов из publicMetadata
  const enrolledCourses = (user.publicMetadata?.enrolledCourses as string[]) || [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Заголовок */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Personal Account</h1>
          <p className="text-slate-600 mt-1">Manage your profile and access your enrolled courses.</p>
        </div>

        {/* Карточка профиля */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-50 shadow-inner flex-shrink-0">
            {user.imageUrl ? (
              <Image
                src={user.imageUrl}
                alt={user.firstName || 'User Avatar'}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-2xl">
                {user.firstName?.[0] || 'U'}
              </div>
            )}
          </div>

          <div className="flex-1 text-center sm:text-left space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              {user.firstName} {user.lastName}
            </h2>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{user.emailAddresses[0]?.emailAddress}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Joined {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Секция с записанными курсами */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              My Enrolled Courses ({enrolledCourses.length})
            </h2>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enrolledCourses.map((courseSlug, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Active Enrollment
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 capitalize">
                      {courseSlug.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-sm text-slate-600">
                      You have full access to all course materials and support.
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/courses/${courseSlug}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors text-sm"
                    >
                      Go to Course
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">No courses yet</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                You haven&apos;t enrolled in any courses yet. Explore our available programs and start learning today!
              </p>
              <div className="pt-2">
                <Link
                  href="/#courses"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
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