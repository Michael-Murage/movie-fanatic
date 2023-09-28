import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

interface Suggestion {
    type: string,
    reason: string,
    recommendedMovieBillboard: string | unknown
};
interface SuggestionData {
    type: string,
    reason: string,
    recommendedMovieBillboard: string
}
@Component({
  selector: 'app-suggest-movie',
  templateUrl: './suggest-movie.component.html',
  styleUrls: ['./suggest-movie.component.css']
})
export class SuggestMovieComponent {
    private suggestion: Suggestion = {
        type: '',
        reason: '',
        recommendedMovieBillboard: ''
    };
    private env = environment;
    typeError: boolean = false;
    reasonError: boolean = false;
    showSubmittedMessage: boolean = false;

    constructor(
        private sanitizer: DomSanitizer
    ) {}

    handleInput(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): void {
        if (this.typeError || this.reasonError) {
            this.typeError = false;
            this.reasonError = false;
        }
        if (input.name === 'type') {
            this.suggestion.type = input.value;
        } else if (input.name === 'reason') {
            this.suggestion.reason = input.value;
        } else if (input.name === 'recommendedMovieBillboard' && input instanceof HTMLInputElement) {
            this.readFile((!input.files ? new Blob() : input.files[0]))
        }
    }

    private toBase64 = (file: Blob) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

    private async readFile(file: Blob) {
        try {
            const processed = await this.toBase64(file);
            this.suggestion.recommendedMovieBillboard = processed;
        } catch (error) {
            console.error('Something went wrong with the file');
        }
    }

    private storeData(): void {
        if (!this.suggestion.type.trim()) {
            this.typeError = true;
            return;
        }
        if (!this.suggestion.reason.trim()) {
            this.reasonError = true;
            return;
        }
        const stringifiedObject = JSON.stringify(this.suggestion);
        const date = Date.now();
        localStorage.setItem(date.toString(), stringifiedObject);
        this.displayInfo();
    }

    submitData(): void {
        this.storeData();
        document.querySelector('form')?.reset();
    }

    private displayInfo(): void {
        this.showSubmittedMessage = true;
        setTimeout(() => {
            this.showSubmittedMessage = false;
        }, 3000);
    }

    imagesArray(): SuggestionData[] {
        const localStorageData: string[] = Object.values(localStorage);
        if (localStorageData.length <= 2) return [];

        const suggestionData: SuggestionData[] = localStorageData
            .filter(item => item !== this.env.email && item !== this.env.password)
            .map(item => JSON.parse(item));

        return suggestionData;
    }

    parseString(term: string): string {
        if(term === 'recommendPart2') return 'Part 2 recommendation';
        else if (term === 'suggestNew') return 'New Suggestion';
        else return term;
    }

    convertStrToImage(str: string): SafeUrl {
        const blob = new Blob([str], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        console.log(str)
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
