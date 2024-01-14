export default function TargetBox({ hideTargetBox, targetBoxLeft, targetBoxTop }) {
    return (
        <div onClick={hideTargetBox} id="target-box" style={{ left: targetBoxLeft, top: targetBoxTop }}>
            •
        </div>
    );
}