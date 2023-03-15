import * as FormData from 'form-data';

export class TestClient<TDto, TResponse> {
  baseURL: string;

  constructor(
    private port: number,
    private route: string,
    private headers: Record<string, string> = {},
  ) {
    this.baseURL = `http://localhost:${this.port}`;
  }

  request(dto: TDto, isFormData?: boolean): Promise<TResponse> {
    if (isFormData) {
      return this.makeFormDataRequest(dto) as Promise<TResponse>;
    }

    return this.makeRequest(dto);
  }

  private async makeRequest(dto: TDto) {
    return this.makePostRequest(dto);
  }

  private async makeFormDataRequest(dto: TDto) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(dto)) {
      formData.append(key, value);
    }

    return this.makePostRequest(formData);
  }

  private async makePostRequest(body: any) {
    try {
      const res = await fetch(`${this.baseURL}/${this.route}`, {
        headers: this.headers,
        method: 'POST',
        body,
      });
      const streamHeaders = [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/pdf',
      ];
      if (streamHeaders.includes(res.headers.get('content-type'))) {
        return 'text';
      }

      return res.json();
    } catch (e) {
      return 23;
    }
  }
}
