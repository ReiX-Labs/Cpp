import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { curriculumAnchorUrl, resolveCourseId } from "../content/curriculum";

/** Historical course URLs resolve into the single curriculum. */
export default function Fundamentals() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const source = resolveCourseId(id ?? params.get("topic"));
  const target = curriculumAnchorUrl(params.get("anchor") ?? "", source) ?? curriculumAnchorUrl(source) ?? "/lesson/0";
  return <Navigate to={target} replace />;
}
