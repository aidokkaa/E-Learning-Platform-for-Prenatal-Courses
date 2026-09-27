import { Course } from '@/types'
import {babyCareSecretsCourse} from './baby-care-secrets'
import {breathingTechniquesCourse} from './breathing-techniques'
import {earlyBabyDevCourse} from './early-baby-developmentCourse'
import {naturalChildBirthCourse} from './gentle-natural-childbirth'
import {momAndBabyCourse} from './mom-and-baby'
import {nineMonthPregnancyPlanCourse} from './nine-month-pregnancy-plan'
import {postpartumRecoveryCourse} from './postpartum-recovery-course'

export const COURSES: Course[] = [
  momAndBabyCourse,
  breathingTechniquesCourse,
  naturalChildBirthCourse,
  nineMonthPregnancyPlanCourse,
  postpartumRecoveryCourse,
  earlyBabyDevCourse,
  babyCareSecretsCourse,
];