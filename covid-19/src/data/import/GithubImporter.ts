import axios, {AxiosResponse} from 'axios';

interface GithubLink {
    git: string;
    self: string;
    html: string;
}

interface GithubContent {
    type: string;
    encoding: string;
    size: number;
    name: string;
    path: string;
    content: string;
    sha: string;
    url: string;
    git_url: string;
    html_url: string;
    download_url: string;
    _links: GithubLink
}

export default class GithubImporter {
    // private readonly commit = `https://api.github.com/repos/${this.owner}/${this.repo}/commits`
    private readonly content = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/`

    constructor(private owner: string,
                private repo: string) {
    }

    getFiles(path: string): Promise<GithubContent[]> {
        return new Promise<GithubContent[]>((resolve, reject) => {
            axios.get<GithubContent[]>(this.content + path).then(r => {
                resolve(r.data)
            }).catch(reject);
        })
    }

    getFile(path: string): Promise<GithubContent> {
        console.log('Accessing File ' + this.content + path)
        return new Promise<GithubContent>((resolve, reject) => {
            axios.get<GithubContent>(this.content + path).then(r => {
                resolve(r.data)
            }).catch(reject);
        })
    }
}
