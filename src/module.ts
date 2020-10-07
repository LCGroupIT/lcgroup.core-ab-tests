import {ModuleWithProviders, NgModule} from '@angular/core';
import {CookieHandler, CrawlerDetector, RandomExtractor} from './classes';
import {AbTestVersionDirective} from './directive';
import {AbTestsGuard} from './guard';
import {CONFIG} from './injection-tokens';
import {AbTestsPipe} from './pipe';
import {AbTestsService} from './service';
import {AbTestOptions} from './interfaces';

@NgModule({
    declarations: [AbTestVersionDirective, AbTestsPipe],
    exports: [AbTestVersionDirective, AbTestsPipe],
})
export class AbTestsModule {
    static forRoot(configs: AbTestOptions[]): ModuleWithProviders<AbTestsModule> {
        return {
            ngModule: AbTestsModule,
            providers: [
                AbTestsService,
                {provide: CONFIG, useValue: configs},
                CookieHandler,
                CrawlerDetector,
                RandomExtractor,
                AbTestsGuard,
            ],
        };
    }
}
