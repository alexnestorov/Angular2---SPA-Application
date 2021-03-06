import { NgModule } from '@angular/core';
import { SortByFirstThenByLastNamePipe } from './sort-by-first-then-last-name.pipe';
import { SortByFirstNamePipe } from './sort-by-first-name.pipe';
import { SortByClassNumberPipe } from './sort-by-class-number.pipe';
import { FilterByTeacherSubjectPipe } from './filter-by-teacher-subject.pipe';
import { AveragePipe } from './average.pipe';
import { FilterMarksPipe } from './filter-marks.pipe';
import { FilterClassBySubjectPipe } from './filter-class-by-subject.pipe';
import { SplitByCapitalLettersPipe } from './split-by-capital-letters.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    declarations: [
        SortByFirstNamePipe,
        SortByFirstThenByLastNamePipe,
        SortByClassNumberPipe,
        FilterByTeacherSubjectPipe,
        AveragePipe,
        FilterMarksPipe,
        FilterClassBySubjectPipe,
        SplitByCapitalLettersPipe,
        TruncatePipe
    ],
    exports: [
        SortByFirstNamePipe,
        SortByFirstThenByLastNamePipe,
        SortByClassNumberPipe,
        FilterByTeacherSubjectPipe,
        AveragePipe,
        FilterMarksPipe,
        FilterClassBySubjectPipe,
        SplitByCapitalLettersPipe,
        TruncatePipe
    ]
})
export class PipesModule {
}
