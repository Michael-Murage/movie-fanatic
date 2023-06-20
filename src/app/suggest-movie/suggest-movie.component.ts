import { Component } from '@angular/core';

interface Suggestion {
    type: string,
    reason: string,
    recommendedMovieBillboard: string | unknown
};
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
    typeError: boolean = false;
    reasonError: boolean = false;
    showSubmittedMessage: boolean = false;

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
}
