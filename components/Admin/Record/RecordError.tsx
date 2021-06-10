import { AxiosError } from "axios";

interface IProps {
  error: AxiosError;
}

export const RecordError: React.FC<IProps> = ({ error }) => {

  return (
    <div className="error">
      <div>
        <b>Message: </b> {error.message}
      </div>
      <div>
        <b>URL:</b> {error.config.url}
      </div>
      {error.response?.data.message && (
        <div>
          <b>Details:</b> {error.response?.data.message}
        </div>
      )}
    </div>
  );
};
