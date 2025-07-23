import { BsCheckCircle } from "react-icons/bs";

const steps = ["Location", "Car", "Details", "Payment"];

const StepProgress = ({ step }) => {
  return (
    <div className="d-flex justify-content-center gap-5 steps mx-auto" style={{ maxWidth: "967.09px" }}>
      {steps.map((label, idx) => {
        const current = idx + 1;
        const isActive = step >= current;

        return (
          <div key={label} className="d-flex align-items-center gap-2">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center fs-5  text-dark border-dark border-1 border `}
              style={{
                width: 50,
                height: 50,
              }}
            >
              {isActive ? <BsCheckCircle size={28} /> : current}
            </div>
            <div className="mt-2 fs-6 ">{label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
